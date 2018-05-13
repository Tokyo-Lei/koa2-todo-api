# Node.js环境下简单实现增删改查的RESTful API

> 前言

一直在写前端的业务逻辑, 但很想入手Node, 写写服务端的代码, 所以自己在工作之余, 写了这么一个小demo, 很多接口大部分都是针对数据的增删改查,  实现了这个基础的功能, 对于后续的知识点将会帮助很大, 希望看到这篇文章的大🐂, 可以多多给予学习上的建议与指导哈😊~


> 环境介绍

本地：Mac OSX 10.11.4，应用采用的技术：Node.js + Koa2 + Mongodb

远端服务器：阿里云ECS（1核CPU、 2GB内存），IP：xx.104.xx.19x，系统为CentOS 7.4 64位

> 本地和服务器端安装必要的软件

如下应用：Node、npm、pm2、mongodb、Nginx

> 开发流程介绍

本地代码开发测试后，然后通过pm2部署远程服务器，并在3000端口进行监听, 然后配置Nginx, 实现接口代理转发。

>Build Setup

``` bash
# install dependencies
npm install

# Setup mongodb
mongod --dbpath XXX

# serve with hot reload at localhost:3080
node server.js or pm2 start server.js

# 4. 接下来的操作你们都懂😏~
```

## 接口列表：

### 1、新增用户

#### 请求URL:
```
http://localhost:3000/api/v1/save/  (本地接口)
http://yinpeng1994.cn:3000/api/v1/find/ (阿里云服务端接口)
http://demo.yinpeng1994.cn:3000/api/v1/find/  (二级域名解析接口)
```
#### 请求方式:
```
POST
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string  | 用户名 |
|password      |Y       |string  | 用户名 |
#### 返回示例：

```javascript
{
    "code": 0,
    "success": "注册成功"
}
```
### 2、删除用户

#### 请求URL:
```
http://localhost:3000/api/v1/delete/
```
#### 请求方式:
```
POST
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id     |Y       |string  | 主键id |
#### 返回示例：

```javascript
{
    "code": 0,
    "success": "删除成功"
}
```
### 3、更新用户

#### 请求URL:
```
http://localhost:3000/api/v1/update/
```
#### 请求方式:
```
POST
```

#### 参数类型：param

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string  | 用户名 |
|password      |Y       |string  | 用户名 |
#### 返回示例：

```javascript
{
    "code": 0,
    "success": "更新成功"
}
```
### 4、查找用户

#### 请求URL:
```
http://localhost:3000/api/v1/find/
```
#### 请求方式:
```
GET
```
#### 返回示例：

```javascript
{
    "code": 0,
    "success": "查询成功"
}
```

# Features
1. 接下会结合koa2,去实现一个对数据的增删改查的数据接口 (✅)

2. 部署到阿里云, Nginx配置代理转发 (✅)

3. 实现用户的登录注册前后端功能

4. 实现电商网站基本功能....

5. .....
