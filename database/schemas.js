const mongoose = require('./config'),
Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')



const schemas = {
    userSchema: new Schema({
        username: {type:String},
        password: {type:String},
        email: {type: String},
        fechaInicioActividad: {type:Number},
        fechaFinActividad: {type:Number}
    }),

    // comercioSchema: new Schema({
    //     nombreComercio: {type: String},
    //     horarioServicio: {type: String},
    //     telefono: {type: Number},
    //     email: {type: String},
    //     idlogo: {type: ObjectId},
    //     idfotoscomercio: {type: ObjectId},
    //     formapago: {type: ObjectId},
    //     codigoventa: {type: Boolean}
    // })
};

// User models
schemas.userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}

schemas.userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.local.password)
}

module.exports = schemas;