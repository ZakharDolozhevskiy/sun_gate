const mongoose = require('libs/mongoose');

module.exports = mongoose.model('Age', { age: Number, genDate: Date });
