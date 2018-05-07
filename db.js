// 启动 mongod --dbpath Desktop/node/node-mongodb
const mongoose = require('mongoose');

// 设置数据库地址
const DB_URL = 'mongodb://localhost:27017/login';

// 连接数据库
mongoose.connect(DB_URL);

let db = mongoose.connection;
// 防止Mongoose: mpromise 错误
mongoose.Promise = global.Promise;

db.on('open', function(){
    console.log('数据库连接成功！');
});
db.on('error', function(){
    console.log('数据库连接出错！');
});
db.on('disconnected',function () {
    console.log('数据库连接断开!');
});

// 导出mongoose对象
module.exports = mongoose;

