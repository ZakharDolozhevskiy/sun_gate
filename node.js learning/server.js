(function () {
  "use strict";
  var express = require('express'),
      bodyParser = require('body-parser'),
      app = express();

// Processing static assets
  app.use('/public/', express.static('public'));
  app.set('views', './views');
  app.set('view engine', 'ejs');

// JSON query processing middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

// Entry point
  app.get('/', function (req, res) {
    res.render('index');
  });

// Add router
  require('./router')(app);

  app.listen(3000, function () { console.info('server start at port 3000'); });
}());

