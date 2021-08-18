#!/bin/sh

BINPATH=$(cd "$(dirname $0)"; pwd)
SERVICE_NAME="dolphinscheduler.service"

SERVICE_SCRIPT="run-service.sh"

RUNUSER=$1
if [ "$RUNUSER" = "" ]; then
  RUNUSER="root"
fi

main() {
echo "
[Unit]
Description=Npm dolphinscheduler
After=syslog.target network.target

[Service]
User=${RUNUSER}

Type=forking
Restart=always
RestartSec=30
StandardOutput=null
StandardError=null
SuccessExitStatus=143
StartLimitInterval=0
ExecStart=${BINPATH}/${SERVICE_SCRIPT}
ExecStop=/bin/kill \$MAINPID

[Install]
WantedBy=multi-user.target
">/etc/systemd/system/${SERVICE_NAME}

    if [ $? -eq 0 ]; then
        chmod 666 /etc/systemd/system/${SERVICE_NAME}
        echo "Npm ${SERVICE_NAME} success installed to: ${SERVICE_NAME}!"
    else
        echo "Npm ${SERVICE_NAME} install failed!"
        exit 1;
    fi

    systemctl daemon-reload
    systemctl enable ${SERVICE_NAME}
}

main
