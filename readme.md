# 利用node环境下利用mongoose 实现对mongodb的增删改查 推荐一个MAC好用的可视化工具

**Robo 3T**

1. 启动可视化工具

2. 连接数据库（前提是已经启动了mongo数据库）

3. 新建数据库mongoosetest

4. 接下来的操作你们都懂😏~

总结Schema、Model、Entity的关系:

Schema ： 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力, 每一张数据表对应的字段的数据类型

Schema所能够拥有的数据类型有以下几个

String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array

字段介绍，以number字段为例

type是该字段的数据类型
default是该字段的默认值
还有很多其他的属性，以及可以自定义属性


Model ： 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对

Entity ： 由Model创建的实体，他的操作也会影响数据库

Schema、Model、Entity的关系是：Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。

# Features
1. 接下会结合koa2,去实现一个对数据的增删改查的数据接口

2. 部署到阿里云

3. .....


## 接口列表：

### 1、新增用户

#### 请求URL:
```
http://localhost:3000/api/v1/save/
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
