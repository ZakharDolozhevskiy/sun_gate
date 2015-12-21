const mongoose = require('mongoose');
const config   = require('config');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'), () => {
  /* Drop the DB */
  mongoose.connection.db.dropDatabase();
  console.log('the database has been dropped');
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', console.log.bind(console, 'connected without errors'));

module.exports = mongoose;
