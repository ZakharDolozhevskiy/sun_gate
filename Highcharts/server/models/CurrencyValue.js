const mongoose = require('libs/mongoose');

module.exports = mongoose.model('Currency', { currency: String, genDate: Date });
