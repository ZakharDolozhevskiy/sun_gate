#! /usr/bin/env node
(function () {
  "use strict";
  var config, questions,
      args = require('optimist').argv,
      fs = require('fs'),
      path = require('path'),
      questionaire = require('../questionaire'),
      minificator = require('../minificator');

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

    if(args.help) {
      fs.readFile(path.join(__dirname, '..', 'help.txt'), function (err, data) {

        if (err) { throw err; }

        console.log(data.toString());
      });
    }

    questionaire(config, questions, function () {
      minificator(config.src, config.dest);
    });

})();

