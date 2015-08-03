var mongoose = require('../db/mongoose'),
  dbSchema = mongoose.Schema(
    {
      description: String,
      category: String,
      title: String,
      price: String,
      user: {
        type: String,
        required: true
      },
      contact: Number
    }, {
      versionKey: false
    }
  );

module.exports = mongoose.model('all_notes', dbSchema);