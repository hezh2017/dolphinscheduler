#!/bin/sh

source /etc/profile

JAVA_HOME=""
JAVA_OPTS="-Xmx8g -Xms1g -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath='./java_pid_%p.hprof' "
JAVA_ENV="-Dspring.profiles.active=prod"

BINPATH=$(cd "$(dirname $0)"; pwd)
PROGRAM_PATH=$(cd "${BINPATH}/.."; pwd)
cd ${PROGRAM_PATH}

EXITCODE=1

setAndCheckJavaHome() {

  if [ "${JAVA_HOME}" != "" ]; then
    export JAVA_HOME
    export PATH=${JAVA_HOME}/bin:$PATH
    export CLASS_PATH=.:$JAVA_HOME/lib
  fi

  javaVersion=$(java -version 2>&1| grep 'build 11' |grep -v grep |wc -l)
  if [ $? -ne 0 ]; then
    echo "Error： java version check failed"
    exit $EXITCODE
  fi

  if [ $javaVersion == 0 ]; then
     echo "Error: java version must great than or equal to 11! "
     exit $EXITCODE
  fi

}

findNewestModuleJar() {
  newFile=$(ls -t -1 ${PROGRAM_PATH}/module/ |grep '.jar' |head -n 1)
  if [ "$newFile" == "" ]; then
    echo "Error: module jar not found"
    exit $EXITCODE
  fi
  echo $newFile
}

main() {
  setAndCheckJavaHome
  moduleJar=$(findNewestModuleJar)

  echo "Found module jar: $moduleJar"
  JAR="-jar ${PROGRAM_PATH}/module/$moduleJar"
  CMD="java ${JAVA_ENV} ${JAVA_OPTS} $JAR"

  echo "Run cmd: $CMD"
  $CMD &
}

main

