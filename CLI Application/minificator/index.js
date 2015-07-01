(function () {
  "use strict";
  var fs = require('fs'),
      path = require('path'),
      glob = require('glob'),
      minify = require('minify'),
      filendir = require('filendir');

  module.exports = function (srcFld, destFld) {
    printIntroMsg(srcFld, destFld);

    glob(srcFld + "**/*.js", function (err, files) {
      for (var i in files) {
        minificator(files[i]);
      }
    });

    function minificator(fileName) {
      minify(fileName, function (err, content) {

        if (err) { return console.log(err); }

        var newFilePath = path.join(destFld, path.relative(srcFld, fileName));

        filendir.writeFileAsync(newFilePath, content, function (err) {

          if (err) { return console.log(err); }

          console.log(newFilePath);
        });
      });
    }

    function printIntroMsg(srcFld, destFld) {
      fs.readFile(path.join(__dirname, '..', 'intro.txt'), function (err, data) {

        if (err) throw err;

        var output = data
          .toString()
          .replace(/%src%/, srcFld)
          .replace(/%dest%/, destFld);

        console.log(output);
      });
    }
  };
})();
