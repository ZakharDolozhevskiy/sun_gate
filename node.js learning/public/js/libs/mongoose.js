(function() {
  "use strict";
  var mongoose = require('mongoose'),
      url = 'mongodb://localhost:27017/users';

  mongoose.connect(url);
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  module.exports = mongoose;
})();