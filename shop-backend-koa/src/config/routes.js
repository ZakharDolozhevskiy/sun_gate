const mount          = require('koa-mount');
const authRouter     = require('../resources/auth');
const docsRouter     = require('../resources/docs');
const rootUpRouter   = require('../resources/root');
const profileRouter  = require('../resources/profile');
const productsRouter = require('../resources/products');

module.exports = app => {
  app.use(docsRouter);
  app.use(mount('/', rootUpRouter));
  app.use(mount('/auth', authRouter));
  app.use(mount('/products', productsRouter));
  app.use(mount('/profile', profileRouter));
};
