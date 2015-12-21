const mongoose = require('libs/mongoose');

module.exports = mongoose.model('Seconds', { sec: Number, genDate: Date });
