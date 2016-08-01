const path  = require('path');
const merge = require('lodash/object/merge');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Base config
const base = {
  env:     process.env.NODE_ENV,
  root:    path.normalize(`${__dirname}/../../..`),
  port:    process.env.PORT || 3000,
  logType: 'dev'
};

// Env config
const env = require(`./${process.env.NODE_ENV}.js`) || {};

module.exports = merge(base, env);
