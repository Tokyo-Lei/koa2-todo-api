const Koa = require('koa');
const path = require('path')
const views = require('koa-views')
const app = new Koa();

// router
const Router = require('koa-router');
const router = new Router();

//bodyparser:该中间件用于post请求的数据
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 引入子路由
const childRouter = require('./routes/user.js');

// 装载子路由
router.use('/api/v1', childRouter.routes(), childRouter.allowedMethods());

// 装载路由中间件
app.use(router.routes()).use(router.allowedMethods());

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 使用模版引擎
app.use(async (ctx) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
})
// 启动服务
app.listen(3000, () => {
    console.log('server is running at localhost:3000')
})
