@echo off
setlocal
cd /d "%~dp0"
title Java Voting System - BK Production

where javac >nul 2>nul
if errorlevel 1 (
  echo Java JDK was not found.
  echo Install JDK 8 or newer, then reopen this file.
  echo Download: https://adoptium.net/
  pause
  exit /b 1
)

echo Compiling VotingMachine.java...
javac -encoding UTF-8 VotingMachine.java
if errorlevel 1 (
  echo.
  echo Compilation failed. Read the error messages above.
  pause
  exit /b 1
)

echo.
echo Starting Voting Machine...
echo Demo admin password: demo-only-change-me
echo.
java -Dvote.admin.password=demo-only-change-me VotingMachine
if errorlevel 1 (
  echo.
  echo The application stopped with an error.
  pause
  exit /b 1
)
endlocal
