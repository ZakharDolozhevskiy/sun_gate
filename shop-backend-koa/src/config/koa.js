const cors     = require('koa-cors');
const views    = require('./views.js');
const serve    = require('koa-static');
const config   = require('./environment');
const helmet   = require('koa-helmet');
const morgan   = require('koa-morgan');
const koaBody  = require('koa-body');
const session  = require('koa-session');
const passport = require('koa-passport');

module.exports = app => {
  app.use(morgan.middleware(config.logType));
  app.use(cors());
  app.use(serve(config.publicPath));
  app.use(views());
  app.use(helmet());
  app.use(koaBody(config.koaBody));
  app.use(session(app));
  app.use(passport.initialize());
  app.use(passport.session());
};
