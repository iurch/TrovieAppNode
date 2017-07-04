const mongoose = require('./config'),
Schema = mongoose.Schema;

const schemas = {
    userSchema: new Schema({
        username: {type:String},
        password: {type:String},
        email: {type: String}
    }),

    comercioSchema = new Schema({
        nombreComercio: {type: String},
        horarioServicio: {type: String},
        telefono: {type: Number},
        email: {type: String},
        idlogo: {type: ObjectId},
        idfotoscomercio: {type: ObjectId},
        formapago: {type: ObjectId},
        codigoventa: {type: Boolean}
    })
}

module.exports = schemas;