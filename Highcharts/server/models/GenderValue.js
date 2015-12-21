const mongoose = require('libs/mongoose');

module.exports = mongoose.model('Gender', { gender: String, genDate: Date });
