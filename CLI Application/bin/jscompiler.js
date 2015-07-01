#! /usr/bin/env node
(function () {
  "use strict";
  var config, questions;
  var args = require('minimist')(process.argv.slice(2));
  var fs = require('fs');
  var path = require('path');
  var questionaire = require('../questionaire');
  var minificator = require('../minificator');

  if(args.help) {
    fs.readFile(path.join(__dirname, '..', 'help.txt'), function (err, data) {

      if(err) { throw err; }

      console.log(data.toString());
      process.exit(0);
    });
  }

  config = {
    src: args.src,
    dest: args.dest
  };

  questions = [
    {
    key: 'src',
    question: 'Please enter absolute path to source folder: \n'
    },
    {
      key: 'dest',
      question: 'Please enter absolute path to destination folder: \n'
    }
  ];

  questionaire(config, questions, function () {
    minificator(config.src, config.dest);
  });
})();

