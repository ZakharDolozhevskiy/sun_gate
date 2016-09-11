const views = require('koa-views');
const path  = __dirname + '/../views';

const config = {
  map: {
    extension: 'jade'
  }
};

module.exports = function koaViews() { return views(path, config); };
