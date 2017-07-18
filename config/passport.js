var LocalStrategy = require('passport-local').Strategy
var users = require('../models/UserModel').users

module.exports = function(passport){
    passport.serializeUser(function (user,done){
        done(null,user.id)
    })

    passport.deserializeUser(function (id,done){
        users.findById(id,function(err,user){
            done(err,user)
        })
    })

    passport.use('local-signup',new LocalStrategy({
        usernameField: 'email',
        passwordField:  'password',
        passReqToCallback: true
    },function (req,email,password,done){
        process.nextTick(function (){
            users.findOne({'email':email},function(err,user){
                console.log(user)
                if (err){
                    return done(err)
                }
                if(user){
                    return done(null,false,req.flash('signupMessage','That email is already taken.'))
                } else {
                    var newUser = new users()
                    newUser.email = email
                    newUser.password = password

                    newUser.save(function(err){
                        if(err)
                            throw err

                        return done(null,newUser)
                    })
                }
            })
        })
    }))
}