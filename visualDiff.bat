REM beforeは前々回処理分なので消す
del .reg\before\* /Q

REM 今afterにあるものが今回の比較ベースなのでbeforeに移す
move .reg\after\* .reg\before\

REM captureにあるものを比較対象としてafterに移す
copy .capture\* .reg\after\

REM 比較処理結果フォルダ初期化
rd /s /q diff

REM 比較処理実施
npx reg-cli .reg/after .reg/before diff -R diff/index.html -S -M 0.05 -J diff/reg.json && start diff\index.html
