const mongoose = require('../database/config');
const UserSchema = require('../database/schemas').userSchema;


const models = {
    User: mongoose.model('User',UserSchema)
};

module.exports = models;