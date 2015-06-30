(function () {
  "use strict";
  var readline = require('readline');

  module.exports = function (config, questions, cb) {
    var i = 0;
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    ask(i);

    /////////////////////////////////////////////////
    function ask(i) {
      if (!questions[i]) { return stopAsking(); }

      if (!config[questions[i].key]) {
        rl.question(questions[i].question, function (answer) {

          if (answer) {
            config[questions[i].key] = answer;
            ask(++i);
          } else {
            ask(i);
          }
        });
      } else {
        ask(++i);
      }
    }

    function stopAsking() {
      rl.close();
      cb();
    }
  };

})();
