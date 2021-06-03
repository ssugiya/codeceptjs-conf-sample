REM 不正終了してchromeDriverがたくさん残っちゃった時の一括終了バッチ

taskkill /im 87.0.4280.20-x64-chromedriver /f
taskkill /im latest-x64-chromedriver /f
taskkill /im 3.150.1-x64-IEDriverServer.exe /f
taskkill /im 3.150.1-ia32-IEDriverServer.exe /f
