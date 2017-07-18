var express = require('express')
var router = express.Router()

module.exports = function (app, passport) {

    app.get('/', function (req, res, next) {
        res.render('index', { title: '' });
    })

    app.get('/singup', function (req, res) {
        res.render('singup')
    })

    app.post('/singup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFash: true
    }))

    app.get('/logout', function (req, res) {
        req.logout()
        res.redirect('/')
    })

    app.post('/login', function (req, res) {
        console.log('REGRESA ALGO?=')
        res.send(null)
    })

    app.get('/app', isLoggedIn, function (req, res, next) {
        res.send('Bievenido Usuario')
    })

    // router.get('/', function (req, res, next) {
    //     res.render('index', { title: '' });
    // })

    // router.get('/singup', function (req, res) {
    //     res.render('singup')
    // })

    // router.post('/singup', passport.authenticate('local-signup', {
    //     successRedirect: '',
    //     failureRedirect: '/signup',
    //     failureFash: true
    // }))

    // router.get('/logout', function (req, res) {
    //     req.logout()
    //     res.redirect('/')
    // })

    // router.post('/login', function (req, res) {

    // })

    // router.get('/app', isLoggedIn, function (req, res, next) {
    //     res.send('Bievenido Usuario')
    // })

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }

        res.redirect('/')
    }
}