const User = require('./../model/user.js').User;

//创建一个插入数据到数据库中的函数
function insert() {
    //用Model创建一个Entity实体，就是一个User的数据
    var user_info = new User({
        username: 'lisa',
        password: '123456',
        age: 18,
        loginDate: new Date(),
    });

    //调用user_info的save方法，插入user_info的数据到数据库中
    user_info.save(function (err, res) {
        if(err){
            console.log("Error: " + err);
        }else{
            console.log("Success Res: " + res)
        }
    });
}
//执行插入操作
insert();
