const mongoose = require('./config'),
Schema = mongoose.Schema;

const schemas = {
    userSchema: new Schema({
        username: {type:String},
        password: {type:String}
    })
}

module.exports = schemas;