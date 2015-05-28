(function () {
  "use strict";
  var http, fs, db, id, temp;

  http = require('http');
  fs = require('fs');
  db = require('./fake-db');

  new http.Server(function (req, res) {
// Get entry point html file
    if (req.url === '/') {
      fs.readFile('views/index.html', function (err, data) {

        if (err) {
          console.log('Entry point file getting error: ' + err);
          res.statusCode = 500;
        } else {
          res.writeHeader(200, {"Content-Type": "text/html"});
          res.end(data);
        }
      });
    }
// Get other static content files
    if (/public/.test(req.url)) {
      fs.readFile(__dirname + req.url, function (err, data) {

        if (err) {
          console.log('Static content getting error: ' + err);
          res.statusCode = 500;
        } else {
          res.end(data);
        }
      });
    }
// Processing requests for new record add and records collection getting
    if(req.url === '/api/users') {
      res.setHeader('Content-Type', 'application/json');

      if (req.method === 'GET') {
        db.getCollection(function(err, data) {

          if (err) {
            console.log('DB\'s method: getCollection error: ' + err);
            res.statusCode = 500;
          } else {
            res.write(JSON.stringify(data));
            res.end();
          }
        });

      } else if (req.method === 'POST') {
        temp = '';

        req.on('data', function (data) {
          temp += data.toString();
        });

        req.on('end', function () {
          db.create(JSON.parse(temp), function (err, result) {
            if (err) {
              console.log('DB\'s method: create error: ' + err);
              res.statusCode = 500;
            } else {
              res.write(JSON.stringify(result));
            }
          });
          res.end();
        });
      }
    }
// Processing requests for edit, delete and get record by ID
    if (/\/api\/users\/[A-Za-z0-9]+/.test(req.url)) {
      id = req.url.split('/')[3];
      res.setHeader('Content-Type', 'application/json');

      if (req.method === 'GET') {
        db.getById(id, function (err, result) {

          if (err) {
            console.log('DB\'s method: getById error: ' + err);
            res.statusCode = 500;
          } else {
            res.write(JSON.stringify(result));
          }
          res.end();
        });

      } else if (req.method === 'DELETE') {
        db.remove(id, function (err) {

          if (err) {
            console.log('DB\'s method: remove error: ' + err);
            res.statusCode = 500;
          } else {
            res.statusCode = 200;
            res.end();
          }
        });

      } else if (req.method === 'PUT') {
        temp = '';

        req.on('data', function (data) {
          temp += data.toString();
        });

        req.on('end', function () {
          db.update(JSON.parse(temp), function (err, result) {

            if (err) {
              console.log('DB\'s method: update error: ' + err);
              res.statusCode = 500;
            } else {
              res.write(JSON.stringify(result));
            }
            res.end();
          });
        });
      }
    }
  }).listen(3000);
}());


