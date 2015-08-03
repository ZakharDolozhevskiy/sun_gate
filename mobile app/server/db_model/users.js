var mongoose = require('../db/mongoose'),
  dbSchema = mongoose.Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        unique: true,
        required: true
      },
      name: String,
      contacts: String
    }, {
      versionKey: false
    }
  );

module.exports = mongoose.model('all_users', dbSchema);