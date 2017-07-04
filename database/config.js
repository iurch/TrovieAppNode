mongoose = require('mongoose');

module.exports = function() {
     if(mongoose.connect('mongodb://localhost/trovi/comercios'))
        console.log('Conexion creada correctamente : MONGODB')
}