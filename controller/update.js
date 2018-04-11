const User = require('./../model/user.js').User;

const update = () => {
    //wherestr是我们要进行操作的数据
    let [wherestr, updatestr] = [{'username' : 'yinpeng'}, {'password': 'xxxxxx'}];

    User.update(wherestr, updatestr, (err, res) => {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Update Res:" + res);
        }
    })
}
update();
