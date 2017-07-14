var express = require('express');
var router = express.Router();

let UsersModel = require('../models/UserModel').users;

// router.get('/',(req,res)=>{
//     res.send(JSON.stringify({'ok':'ok'}))
//     res.end()
// })

router.post('/',function(req,res,next){
    let usernameOrEmail = req.body.usernameOrEmail;
    let password = req.body.password;
    let json = {"password":password}


    if (isEmail(usernameOrEmail)) {
        json.email = usernameOrEmail
    } else {
        json.username = usernameOrEmail        
    }
    UsersModel.findOne(json, function (err, doc) {
            if (err !== null)
                next(err)
            if (doc !== null) {
                let UserJSON = {
                    id: doc._id,
                    username: doc.username,
                    email: doc.email,
                    password: '',
                    activo: true
                }
                res.json(UserJSON);
                res.end()
            } else {
                res.json(null)
                res.end()
            }
        });
});

function isEmail(userOrEmail) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userOrEmail);
}

module.exports = router;
