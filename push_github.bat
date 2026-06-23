@echo off
echo Preparando para enviar para o GitHub...
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/Heuller/el-guapooo.git
echo Fazendo o Push...
"C:\Program Files\Git\cmd\git.exe" push -u origin master
echo.
echo Processo concluido! Se a janela de login apareceu, o codigo ja deve estar no GitHub.
pause
