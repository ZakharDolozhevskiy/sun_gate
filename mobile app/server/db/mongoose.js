var mongoose = require('mongoose'),
    uri = 'mongodb://admin:1234@ds055852.mongolab.com:55852/billborad_db';

mongoose.connect(uri);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('open', console.log.bind(console, ':: MongoLab connection created ::'));

module.exports = mongoose;