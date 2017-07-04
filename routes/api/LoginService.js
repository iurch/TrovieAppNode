const express = require('express');
const router = express.Router();
let UserModel = require('../../models/UserModel').User;

router.get('/',function (req,res,next){
    var User = new UserModel({
        username: 'JMAR',
        password: '12345'
    })

    User.save(function (err,user){
        
        if(err)
            console.log('Ocurrio un error al guardar el user')
        else 
            res.send(user)

        
    });
    
});

router.post('/login',function(req,res,next){

});

module.exports = router;