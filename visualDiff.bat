REM before�͑O�X�񏈗����Ȃ̂ŏ���
del .reg\before\* /Q

REM ��after�ɂ�����̂�����̔�r�x�[�X�Ȃ̂�before�Ɉڂ�
move .reg\after\* .reg\before\

REM capture�ɂ�����̂��r�ΏۂƂ���after�Ɉڂ�
copy .capture\* .reg\after\

REM ��r�������ʃt�H���_������
rd /s /q diff

REM ��r�������{
npx reg-cli .reg/after .reg/before diff -R diff/index.html -S -M 0.05 -J diff/reg.json && start diff\index.html
