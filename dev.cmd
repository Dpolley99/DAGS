@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"
node "%~dp0node_modules\vite\bin\vite.js" %*
