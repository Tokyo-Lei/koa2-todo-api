const User = require('./../model/user.js').User;

const find = () => {
    let wherestr = {'username': 'yinpeng'};
    User.find(wherestr, (err, res) => {
        if (err) {
            console.log("Error: " + err);
        } else {
            console.log("Find Res: " + res);
        }
    })
}

find();
