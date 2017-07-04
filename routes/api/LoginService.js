const express = require('express');
const router = express.Router();
let UserModel = require('../../models/UserModel').User;

// router.get('/login',function (req,res,next){
// var User = new UserModel({
//     username: 'Cris',
//     password: 'Cris.01'
// })

// User.save(function (err,user){ 
//     if(err)
//         console.log('Ocurrio un error al guardar el user')
//     else 
//         res.send(user)
// });    
// });

router.post('/login', function (req, res, next) {
    let usernameOrEmail = req.body.usernameOrEmail;
    let password = req.body.password;
    if (isEmail(usernameOrEmail)) {
        // Es email
        console.log('Es un email')
        UserModel.findOne({ email: usernameOrEmail, password: password }, function (err, doc) {
            if (err)
                next(err)

            if (doc) {
                let UserJSON = {
                    id: doc._id,
                    username: doc.username,
                    email: doc.email,
                    password: '',
                    activo: true
                }
                res.send(doc);
            } else {
                res.send('El usuario no es encontrado con esa información')
            }

        });
    } else {
        // es usuario
        console.log('Es un Usuario')
        UserModel.findOne({ username: usernameOrEmail, password: password }, function (err, doc) {
            if (err)
                next(err)

            if (doc) {
                let UserJSON = {
                    id: doc._id,
                    username: doc.username,
                    email: doc.email,
                    password: '',
                    activo: true
                }
                res.send(UserJSON);
            } else {
                res.send('El usuario no es encontrado con esa información')
            }
        });
    }
});
function isEmail(userOrEmail) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userOrEmail);
}

module.exports = router;