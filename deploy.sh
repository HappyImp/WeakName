!/usr/bin/env sh# 确保脚本抛出遇到的错误set -e
# 生成静态文件npm run docs:build
# 进入生成的文件夹cd docs/.vuepress/dist


git initgit add -Agit commit -m 'deploy'

git push -f git@github.com:HappyImp/WeakName.io.git master
