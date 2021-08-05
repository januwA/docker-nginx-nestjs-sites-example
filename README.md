
| 目录      | 作用                |
| --------- | ------------------- |
| src/api   | nodejs api  后端    |
| src/app   | 用户 app            |
| src/admin | 后台 app            |
| db_data/  | mongodb 数据        |
| conf.d/   | nginx 配置          |
| app/      | 静态页面打包目录    |
| api/      | nodejs api 打包目录 |


## build app

> cd src/app/ && npm run build

## build admin

> cd src/admin/ && npm run build

## build nodejs api

> cd src/api/ && npm run build

## create docker container

> docker-compose up -d