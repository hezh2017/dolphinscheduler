package vixtel.dolphinscheduler.all;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidPooledConnection;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.dolphinscheduler.common.utils.OSUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class TaskLogFileDeleteSchecduler {

    @Value("${task.logfile.reserve.days:7}")
    int reserveDays = 7;

    @Value("${task.logfile.reserve.clear.interval:60}")
    int clearIntervalMinute = 60;

    @Autowired
    DruidDataSource dataSource;

    Thread deleteThread = null;
    boolean running = true;

    JdbcTemplate jdbcTemplate = null;

    String sql = null;
    int batchSize = 10000;

    Logger logger = LoggerFactory.getLogger(this.getClass());

    public void initData() {
        if(this.jdbcTemplate == null) {
            this.jdbcTemplate = new JdbcTemplate(this.dataSource);
        }
        if(this.sql == null) {
            this.sql = String.format(
                    "SELECT id, log_path FROM dolphinscheduler.t_ds_task_instance WHERE submit_time < now() - interval %d day and log_path like '%%.log' limit %d"
                    , this.reserveDays, this.batchSize);
        }
    }

    public void clear() {
        this.initData();

        //所有目录
        Set<String> dirs = new HashSet<>();

        //所有ID
        List<Object[]> ids = new ArrayList<>(this.batchSize);
        //当前的数据量
        AtomicInteger size = new AtomicInteger(0);

        do {
            ids.clear();
            size.set(0);

            //遍历数据库，删除日志文件
            this.jdbcTemplate.query(this.sql, rs -> {
                size.incrementAndGet();

                ids.add(new Long[]{rs.getLong(1)});
                String logPath = rs.getString(2);

                FileUtils.deleteQuietly(new File(logPath));
                dirs.add(FilenameUtils.getPath(logPath));
            });

            //更新数据库
            this.jdbcTemplate.batchUpdate("update t_ds_task_instance set log_path = concat(log_path, '-deleted') where id = ?", ids);

            logger.info("删除任务日志文件: {}", size.get());
        } while (size.get() == batchSize);

        //删除空目录
        dirs.forEach(dir -> {
            File d = new File(dir);
            if(d.list().length == 0) {
                d.delete();
            }
        });
    }

    @PostConstruct
    public void init() {
        if(this.reserveDays <= 0) {
            return;
        }

        deleteThread = new Thread(() -> {
            logger.info("==================================================开始定时任务日志删除任务==================================================");
            while(this.running) {
                try {
                    this.clear();
                } catch(Exception e) {
                    logger.error("删除日志文件异常: {}", e.getMessage(), e);
                }
                try {
                    Thread.sleep(this.clearIntervalMinute * 60 * 1000);
                } catch (InterruptedException e) {
                    this.running = false;
                    break;
                }
            }
            logger.info("==================================================退出定时任务日志删除任务==================================================");
        });
        deleteThread.start();
    }


    @PreDestroy
    public void destroy() {
        this.running = false;
        if(this.deleteThread != null) {
            this.deleteThread.interrupt();
        }
    }
}
