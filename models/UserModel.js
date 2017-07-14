const mongoose = require('../database/config');
const UserSchema = require('../database/schemas').userSchema;


const models = {
    users: mongoose.model('users',UserSchema)
};

module.exports = models;