const User = require('./../model/user.js').User;

const del = () => {
    let wherestr = {'username' : 'lisa'};
    User.remove(wherestr, (err, res) => {
        if(err){
            console.log("Error: " + err)
        }else{
            console.log("Success Remove: " + res);
        }
    })
}
del();
