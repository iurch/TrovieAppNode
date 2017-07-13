var express = require('express');
var router = express.Router();

// router.get('/',(req,res)=>{
//     res.send(JSON.stringify({'ok':'ok'}))
//     res.end()
// })

router.post('/',function(req,res,next){
    let usernameOrEmail = req.body.usernameOrEmail;
    let password = req.body.password;

    res.send('Datos')

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
                res.json(UserJSON);
                res.end()
            } else {
                res.send('El usuario no es encontrado con esa información')
            }

        });
    } else {
        // es usuario
        // console.log('Es un Usuario')
        UserModel.findOne({ username: usernameOrEmail, password: password }, function (err, doc) {
            // if (err)
            //     next(err)

            // if (doc) {
                // let UserJSON =  {
                //     id: doc._id,
                //     username: doc.username,
                //     email: doc.email,
                //     password: '',
                //     activo: true
                // }

                let UserJSON =  {
                    id: 4,
                    username: 'jmar',
                    email: 'email',
                    password: '',
                    activo: true
                }
                res.send('Que contestas')
                
            // } else {
            //     res.send('El usuario no es encontrado con esa información')
            // }
        });
    }
});

function isEmail(userOrEmail) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(userOrEmail);
}

module.exports = router;
