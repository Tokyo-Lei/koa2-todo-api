const mongoose = require('./../db.js');

// 声明schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
});

//根据schema生成model
const model = {
    User: mongoose.model('User', userSchema)
};

module.exports = model
