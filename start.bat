@echo off
REM ========================================
REM Portfolio Quick Start Script
REM Windows Batch File
REM ========================================

echo.
echo ================================
echo  PORTFOLIO QUICK START
echo ================================
echo.

:menu
echo Pilih aksi:
echo.
echo [1] Install Dependencies
echo [2] Run Development Server
echo [3] Build Production
echo [4] Preview Production Build
echo [5] Deploy to Vercel
echo [6] Test Backend API
echo [7] Exit
echo.

set /p choice="Pilih nomor (1-7): "

if "%choice%"=="1" goto install
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto preview
if "%choice%"=="5" goto deploy
if "%choice%"=="6" goto backend
if "%choice%"=="7" goto end

echo Invalid choice. Please try again.
goto menu

:install
echo.
echo Installing dependencies...
cd frontend-prj_cci7068a
call npm install
cd ..
echo.
echo ✓ Dependencies installed!
echo.
pause
goto menu

:dev
echo.
echo Starting development server...
echo Frontend akan buka di http://localhost:5173
echo Press Ctrl+C to stop
echo.
cd frontend-prj_cci7068a
call npm run dev
cd ..
pause
goto menu

:build
echo.
echo Building for production...
cd frontend-prj_cci7068a
call npm run build
cd ..
echo.
echo ✓ Build complete! Check dist/ folder
echo.
pause
goto menu

:preview
echo.
echo Starting preview server...
echo Preview akan buka di http://localhost:4173
echo Press Ctrl+C to stop
echo.
cd frontend-prj_cci7068a
call npm run preview
cd ..
pause
goto menu

:deploy
echo.
echo Deploying to Vercel...
echo Make sure you're logged in (vercel login)
echo.
call vercel --prod
echo.
pause
goto menu

:backend
echo.
echo Starting backend server...
echo API akan buka di http://localhost:8000
echo Press Ctrl+C to stop
echo.
cd backend-prj_cci7068a
python main.py
cd ..
pause
goto menu

:end
echo.
echo Bye! Happy coding! 🚀
echo.
pause
exit
