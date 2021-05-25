package vixtel.dolphinscheduler.all;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.dolphinscheduler.alert.AlertServer;
import org.apache.dolphinscheduler.dao.datasource.ConnectionFactory;
import org.apache.dolphinscheduler.server.log.LoggerServer;
import org.apache.dolphinscheduler.server.master.MasterServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.annotation.PostConstruct;

@ComponentScan(value = {"org.apache.dolphinscheduler", "vixtel.dolphinscheduler.all"}
//, excludeFilters = {
//        @ComponentScan.Filter(type = FilterType.REGEX, pattern = {
//                "org.apache.dolphinscheduler.server.worker.*",
//                "org.apache.dolphinscheduler.server.monitor.*",
//                "org.apache.dolphinscheduler.server.log.*"
//        })
//}
)
@EnableTransactionManagement
@SpringBootApplication
@SpringBootConfiguration
@ServletComponentScan
public class DolphinSchedulerSingerInstanceServer {

    @Autowired
    DruidDataSource dataSource;

    public static void main(String[] args) throws InterruptedException {
        //启动内嵌的ZOOKEEPER: 127.0.0.1:2181
        new ZooKeeperServer().run();
        //启动日志服务，查看任务日志时需要用到
        new Thread(() -> LoggerServer.main(new String[]{})).start();
        //启动告警服务，告警配置还是/alert.properties, 参考: org.apache.dolphinscheduler.alert.utils.PropertyUtils.init()
        new Thread(() -> {
            AlertServer.main(new String[]{});
        }).start();
        /*
         * 启动其它服务，包括： master， worker, api, 这三项以及zk client的所有配置都合在了application{-profile}.properties文件中
         * org.apache.dolphinscheduler.server.master.config.MasterConfig
         * org.apache.dolphinscheduler.server.worker.config.WorkerConfig
         * org.apache.dolphinscheduler.service.zk.ZookeeperConfig
         * org.apache.dolphinscheduler.dao.datasource.SpringConnectionFactory.dataSource()
         */
        new SpringApplicationBuilder(DolphinSchedulerSingerInstanceServer.class).web(WebApplicationType.SERVLET).run(args);
    }

    @PostConstruct
    public void init() {
        /*
         * 设置数据源到dao.ConnectionFactory中
         * 原来是直接从datasource.properties文件中加载，因为alter不是spring程序。
         * 现在合在一起了，就直接从spring中使用
         */
        ConnectionFactory.dataSource = dataSource;
    }


}
