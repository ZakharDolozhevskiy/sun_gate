const config   = require('./environment');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoose.url);
