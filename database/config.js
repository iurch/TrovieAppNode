var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/troviapp')

module.exports = mongoose;