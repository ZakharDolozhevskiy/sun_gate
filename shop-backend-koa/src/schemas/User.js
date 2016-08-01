const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email:    { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.statics.isUserExist = function isUserExist(username) {
  return this.findOne({ username }).exec();
};

const User = mongoose.model('User', userSchema);

module.exports = User;
