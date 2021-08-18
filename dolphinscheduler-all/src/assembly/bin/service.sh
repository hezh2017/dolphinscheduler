#!/bin/sh

BINPATH=$(cd "$(dirname $0)"; pwd)
SERVICE_NAME="dolphinscheduler.service"

systemctl $1 ${SERVICE_NAME}
