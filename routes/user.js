const UserController = require('./../controller/user.js');
const Router = require('koa-router');

const userRouter = new Router();

userRouter.post('/save', UserController.insert);
userRouter.get('/find', UserController.GetAllUsers);
userRouter.post('/delete', UserController.DelUser);
userRouter.post('/update', UserController.update);

module.exports = userRouter;
