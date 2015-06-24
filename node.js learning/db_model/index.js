(function () {
  "use strict";
  var mongoose = require('../public/js/libs/mongoose'),
      options = { versionKey: false },
      schema = {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        company: String,
        position: String,
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true }
      },
  userSchema = mongoose.Schema(schema, options);

  userSchema.path('email').validate(function (val) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(val);
  },'Please fill a valid email address');

  userSchema.path('phoneNumber').validate(function (val) {
    return /^([-+])?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(val);
  },'Please fill a valid phone number');

  userSchema .set('toJSON', {
    transform: function (doc, ret){
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  });

  module.exports = mongoose.model('User', userSchema);
}());
