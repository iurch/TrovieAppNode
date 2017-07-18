var mongoose = require('mongoose');

const url = 'mongodb://localhost/troviapp'
mongoose.connect(url)

module.exports = mongoose;

