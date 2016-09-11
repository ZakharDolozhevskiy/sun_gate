const path    = require('path');
const merge   = require('lodash/object/merge');
const parsers = require('../../utils/parsers');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Base config
const base = {
  env:          process.env.NODE_ENV,
  root:         path.normalize(`${__dirname}/../../..`),
  port:         process.env.PORT || 3000,
  logType:      'dev',
  publicPath:   path.normalize(`${__dirname}/../../`),
  frontEndDist: __dirname + '/../../../front-end/'
};

// Middlewares config
const middlewares = {
  koaBody: {
    multipart:  true,
    formidable: {
      uploadDir:      `${__dirname}/../../public/images`,
      onFileBegin:    parsers.normalizeFileName,
      maxFieldsSize:  200 * 1024, // 200mb
      keepExtensions: true
    }
  }
};

// Env config
const env = require(`./${process.env.NODE_ENV}.js`) || {};

module.exports = merge(base, env, middlewares);
