(function () {
    "use strict";
  var db_model = require('../db_model');

  module.exports = function (app) {
    // Processing requests for new record adding and records collection getting
    app.route('\/api\/users$')
      .get(function (req, res) {
        var searchRes, sortOpt = {}, searchOpt = {};
        // Configure sorting options
        sortOpt[req.query.sortBy] = req.query.sortDir;
        // Configure search options
        if(req.query.searchValue && req.query.searchBy) {
          searchOpt[req.query.searchBy] = new RegExp(req.query.searchValue, 'ig');
        }

        searchRes = db_model.find(searchOpt).count(function (err, count) {
          searchRes
            .sort(sortOpt)
            .skip(req.query.perPage * (req.query.offset - 1))
            .limit(req.query.perPage)
            .exec('find', function (err, data) {
              err ?
                res.status(500).send('Server error' + err) :
                res.json({
                  'collection' : data,
                  'total' : count
                });
            });
        });
      })
      .post(function (req, res) {
        new db_model(req.body).save(function (err, user) {
          err ?
            res.status(500).json(err) :
            res.json(user);
        });
      });

// Processing requests for edit, delete and get record by ID
    app.route('/api/users/:id')

      .get(function (req, res) {
        db_model.findById(req.params.id, function (err, user) {
          err ?
            res.status(500).send('DB\'s method: getCollection error: ' + err) :
            res.json(user);
        });
      })

      .put(function (req, res) {
        db_model.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
          err ?
            res.status(500).send('DB\'s method: update error: ' + err) :
            res.json(user);
        });
      })

      .delete(function (req, res) {
        db_model.findByIdAndRemove(req.params.id, function (err, user) {
          err ?
            res.status(500).send('DB\'s method: getCollection error: ' + err) :
            res.json(user);
        });
      });
  };

}());
