set PATH=%PATH%;C:\apache-maven-3.6.3\bin
set DOLPHINPATH=%1
set TARGETPATH=%2

echo DOLPHINPATH: %DOLPHINPATH%
echo TARGETPATH: %TARGETPATH%

@echo off
if %DOLPHINPATH% == "" (
    echo "Error: Must assign input parameter: DOLPHINPATH"
    exit /B 1
)

if not exist %DOLPHINPATH% (
    echo "Error: Dolphinscheduler Directory not exist: %DOLPHINPATH%"
    exit /B 1
) else (
    echo "=================================================================="
    echo "=================================================================="
    echo "=================================================================="
    echo "Build dolphinscheduler common start"
    cd %DOLPHINPATH%
    call mvn install

    echo "=================================================================="
    echo "=================================================================="
    echo "=================================================================="
    echo "Build dolphinscheduler start"
    cd %DOLPHINPATH%\dolphinscheduler-all
    call mvn package -U
)

echo TARGETPATH: %TARGETPATH%

if "%TARGETPATH%" == "" (
    echo "TARGETPATH is Empty"
    echo "----------------------Dolphinscheduler build completed-------------------"
    exit /B 0
) else (
    echo "Copy to %TARGETPATH%"

    cd %DOLPHINPATH%\dolphinscheduler-all\target
    FOR /F "tokens=*" %%I in ('dir /B /O:-D *.jar') do (
        SET OUTPUTJAR=%%I
        goto COPYTARGET
    )
)

:COPYTARGET
echo COPY FILE: %OUTPUTJAR% to %TARGETPATH%
copy /Y %OUTPUTJAR% %TARGETPATH%

echo "----------------------Dolphinscheduler build completed-------------------"
