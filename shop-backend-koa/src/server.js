const app    = require('koa')();
const config = require('./config/environment');

app.keys = [config.key];

require('babel-register')({ presets: ['es2015', 'react'] });

require('babel-polyfill');

require('./config/chai');
require('./config/koa')(app);
require('./config/routes')(app);
require('./config/mongoose');
require('./config/passport');

if (!module.parent) {
  app.listen(config.port, config.ip, () =>
    console.log('Koa server listening on %d, in %s mode', config.port, config.env)
  );
}

module.exports = module.exports = app;
