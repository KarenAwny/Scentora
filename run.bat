@echo off
title SCENTORA Luxury Fragrances
cd /d "%~dp0"

echo ===================================================
echo          SCENTORA - Starting Servers
echo ===================================================
echo.

echo [1/2] Starting Backend (Port 5000)...
start "Scentora-Backend" /min cmd /c "node backend\server.js"

echo [2/2] Starting Frontend (Port 5173)...
start "Scentora-Frontend" cmd /c "npm run dev"

echo.
echo Opening browser...
ping 127.0.0.1 -n 4 >nul
start http://localhost:5173

echo.
echo ===================================================
echo   Store URL:   http://localhost:5173
echo   Admin Panel: http://localhost:5000/admin
echo ===================================================
ping 127.0.0.1 -n 3 >nul
exit
