# 利用node环境下利用mongoose 实现对mongodb的增删改查 推荐一个MAC好用的可视化工具

**Robo 3T**

1. 启动可视化工具

2. 连接数据库（前提是已经启动了mongo数据库）

3. 新建数据库mongoosetest

总结Schema、Model、Entity的关系:

Schema ： 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力

Model ： 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对

Entity ： 由Model创建的实体，他的操作也会影响数据库

Schema、Model、Entity的关系是：Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。

# Features
1. 接下会结合koa2,去实现一个对数据的增删改查的数据接口

2. 部署到阿里云

3. .....
