package vixtel.dolphinscheduler.all;

import org.apache.zookeeper.server.ServerConfig;
import org.apache.zookeeper.server.ZooKeeperServerMain;
import org.apache.zookeeper.server.quorum.QuorumPeerConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.Properties;

public class ZooKeeperServer {
    private static final Logger logger = LoggerFactory.getLogger(ZooKeeperServer.class);

    public void run()  {
        new Thread() {
            public void run() {
                try {
                    Properties props = new Properties();
                    String zooPath = new File(System.getProperty("java.io.tmpdir"), "zookeeper").getAbsolutePath();
                    logger.info("Zookeeper data path: {}", zooPath);

                    props.setProperty("tickTime", "2000");
                    props.setProperty("dataDir", zooPath);
                    props.setProperty("clientPort", "2181");
                    props.setProperty("clientPortAddress", "localhost");
                    props.setProperty("initLimit", "10");
                    props.setProperty("syncLimit", "5");
                    props.setProperty("admin.enableServer", "false");

                    System.getProperty("zookeeper.admin.serverAddress", "127.0.0.1");
                    System.getProperty("zookeeper.admin.serverPort", "7080");

                    QuorumPeerConfig quorumConfig = new QuorumPeerConfig();
                    try {
                        quorumConfig.parseProperties(props);
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }

                    final ZooKeeperServerMain zkServer = new ZooKeeperServerMain();
                    final ServerConfig config = new ServerConfig();
                    config.readFrom(quorumConfig);
                    zkServer.runFromConfig(config);
                    logger.error("Start zKServer completed");
                } catch (Exception e) {
                    logger.error("Start zKServer error: {}", e.getMessage(), e);
                    System.exit(0);
                }
            }
        }.start();
    }

}
