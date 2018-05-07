const User = require('./../model/user.js').User;

//创建一个插入数据到数据库中的函数
const insert = async (ctx) => {
    console.log(ctx.request.body)
    let user = new User({
        username: ctx.request.body.username,
        password: ctx.request.body.password
    })
    await new Promise((resolve, reject) => {
        user.save((err) => {
            if (err) {
                reject(err)
            }
            resolve()
        });
    })
    ctx.status = 200;
    ctx.body = {
        code: 0,
        success: '注册成功'
    }

}

const update = async (ctx) => {
    if (!ctx.request.body.username) {
        return
    }
    let wherestr = {username: ctx.request.body.username};
    let updateStr = {$set: {password: ctx.request.body.password}};
    await new Promise((resolve, reject) => {
        User.updateMany(wherestr, updateStr, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
    ctx.status = 200;
    ctx.body = {
        code: 0,
        success: '更新成功!'
    }
}

// 删除某个用户
const delUser = function (id) {
    return new Promise((resolve, reject) => {
        User.findOneAndRemove({_id: id}, (err, res) => {
            if (err) {
                reject(err);
            }
             resolve(res);
        })
    })
}

const findAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
}

const GetAllUsers = async(ctx) => {
    let res = await findAllUsers();
    ctx.status = 200;
    ctx.body = {
        code: 0,
        success: '查询成功',
        result: res
    }
}

//删除某个用户
const DelUser = async( ctx ) => {
    //拿到要删除的用户id
    let id = ctx.request.body.id;
    await delUser(id);
    ctx.status = 200;
    ctx.body = {
        success: '删除成功'
    };
};

module.exports = {
    insert,
    GetAllUsers,
    DelUser,
    update
}
