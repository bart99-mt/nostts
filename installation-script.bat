@echo off
setlocal enabledelayedexpansion

echo New Open Source Trouble Ticketing System Installation
echo =====================================================
echo.

REM Set installation directory
set INSTALL_DIR=%appdata%\nostts
echo Installation directory: %INSTALL_DIR%

REM Create installation directory if it doesn't exist
if not exist "%INSTALL_DIR%" (
    echo Creating installation directory...
    mkdir "%INSTALL_DIR%" 2>nul
    if !errorlevel! neq 0 (
        echo Error: Failed to create installation directory.
        goto :error
    )
) else (
    echo Installation directory already exists.
)

REM Download the repository ZIP file
echo Downloading repository...
powershell -Command "& { try { Invoke-WebRequest -Uri 'https://github.com/bart99-mt/nostts/archive/refs/heads/main.zip' -OutFile '%TEMP%\nostts.zip' } catch { exit 1 } }"
if %errorlevel% neq 0 (
    echo Error: Failed to download the repository.
    goto :error
)

REM Extract the ZIP file
echo Extracting files...
powershell -Command "& { try { Expand-Archive -Path '%TEMP%\nostts.zip' -DestinationPath '%TEMP%\nostts_temp' -Force } catch { exit 1 } }"
if %errorlevel% neq 0 (
    echo Error: Failed to extract the ZIP file.
    goto :error
)

REM Copy files to installation directory
echo Copying files to installation directory...
xcopy /E /Y "%TEMP%\nostts_temp\nostts-main\*" "%INSTALL_DIR%\" 2>nul
if %errorlevel% neq 0 (
    echo Error: Failed to copy files to the installation directory.
    goto :error
)

REM Clean up temporary files
echo Cleaning up temporary files...
rmdir /S /Q "%TEMP%\nostts_temp" 2>nul
del "%TEMP%\nostts.zip" 2>nul

REM Create desktop shortcuts
echo Creating desktop shortcuts...

REM Create shortcut for index.html
echo Creating shortcut for the application...
echo Set oWS = WScript.CreateObject("WScript.Shell") > "%TEMP%\create_html_shortcut.vbs"
echo sLinkFile = "%USERPROFILE%\Desktop\New Open Source Trouble Ticketing System.lnk" >> "%TEMP%\create_html_shortcut.vbs"
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> "%TEMP%\create_html_shortcut.vbs"
echo oLink.TargetPath = "%INSTALL_DIR%\index.html" >> "%TEMP%\create_html_shortcut.vbs"
echo oLink.WorkingDirectory = "%INSTALL_DIR%" >> "%TEMP%\create_html_shortcut.vbs"
echo oLink.Description = "New Open Source Trouble Ticketing System" >> "%TEMP%\create_html_shortcut.vbs"
echo oLink.IconLocation = "%SystemRoot%\System32\SHELL32.dll,14" >> "%TEMP%\create_html_shortcut.vbs"
echo oLink.Save >> "%TEMP%\create_html_shortcut.vbs"
cscript //nologo "%TEMP%\create_html_shortcut.vbs" 2>nul
if %errorlevel% neq 0 (
    echo Warning: Failed to create shortcut for the application.
)
del "%TEMP%\create_html_shortcut.vbs" 2>nul

REM Create shortcut for nostts-doc.docx
echo Creating shortcut for technical documentation...
echo Set oWS = WScript.CreateObject("WScript.Shell") > "%TEMP%\create_doc_shortcut.vbs"
echo sLinkFile = "%USERPROFILE%\Desktop\nostts-doc.lnk" >> "%TEMP%\create_doc_shortcut.vbs"
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> "%TEMP%\create_doc_shortcut.vbs"
echo oLink.TargetPath = "%INSTALL_DIR%\nostts-doc.docx" >> "%TEMP%\create_doc_shortcut.vbs"
echo oLink.WorkingDirectory = "%INSTALL_DIR%" >> "%TEMP%\create_doc_shortcut.vbs"
echo oLink.Description = "NOSTTS Technical Documentation" >> "%TEMP%\create_doc_shortcut.vbs"
echo oLink.IconLocation = "%SystemRoot%\System32\SHELL32.dll,1" >> "%TEMP%\create_doc_shortcut.vbs"
echo oLink.Save >> "%TEMP%\create_doc_shortcut.vbs"
cscript //nologo "%TEMP%\create_doc_shortcut.vbs" 2>nul
if %errorlevel% neq 0 (
    echo Warning: Failed to create shortcut for technical documentation.
)
del "%TEMP%\create_doc_shortcut.vbs" 2>nul

REM Create shortcut for nostts-user-manual.docx
echo Creating shortcut for user manual...
echo Set oWS = WScript.CreateObject("WScript.Shell") > "%TEMP%\create_manual_shortcut.vbs"
echo sLinkFile = "%USERPROFILE%\Desktop\nostts-user-manual.lnk" >> "%TEMP%\create_manual_shortcut.vbs"
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> "%TEMP%\create_manual_shortcut.vbs"
echo oLink.TargetPath = "%INSTALL_DIR%\nostts-user-manual.docx" >> "%TEMP%\create_manual_shortcut.vbs"
echo oLink.WorkingDirectory = "%INSTALL_DIR%" >> "%TEMP%\create_manual_shortcut.vbs"
echo oLink.Description = "NOSTTS User Manual" >> "%TEMP%\create_manual_shortcut.vbs"
echo oLink.IconLocation = "%SystemRoot%\System32\SHELL32.dll,1" >> "%TEMP%\create_manual_shortcut.vbs"
echo oLink.Save >> "%TEMP%\create_manual_shortcut.vbs"
cscript //nologo "%TEMP%\create_manual_shortcut.vbs" 2>nul
if %errorlevel% neq 0 (
    echo Warning: Failed to create shortcut for user manual.
)
del "%TEMP%\create_manual_shortcut.vbs" 2>nul

echo.
echo Installation completed successfully!
echo The application has been installed to: %INSTALL_DIR%
echo Shortcuts have been created on your desktop.
echo.

REM Ask if user wants to launch the application
set /p LAUNCH_APP=Would you like to launch the application now? (Y/N): 
if /i "%LAUNCH_APP%"=="Y" (
    echo Launching application...
    start "" "%INSTALL_DIR%\index.html"
)

goto :end

:error
echo.
echo Installation failed. Please check the error messages above.
echo.
pause
exit /b 1

:end
echo Press any key to exit...
pause > nul
exit /b 0
