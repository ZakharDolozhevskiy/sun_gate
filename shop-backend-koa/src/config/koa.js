const cors       = require('koa-cors');
const config     = require('./environment');
const helmet     = require('koa-helmet');
const morgan     = require('koa-morgan');
const session    = require('koa-session');
const passport   = require('koa-passport');
const bodyParser = require('koa-bodyparser');

module.exports = app => {
  app.use(morgan.middleware(config.logType));
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser());
  app.use(session(app));
  app.use(passport.initialize());
  app.use(passport.session());
};
