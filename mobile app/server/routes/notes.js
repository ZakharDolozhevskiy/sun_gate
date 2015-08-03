var Notes_db = require('../db_model/all_notes');

module.exports = function (app) {
  app
    .post('/notes', function(req, res) {

      Notes_db.create(req.body, function (err, note) {

        !err ? res.json(note) : console.log(err);
      });
    })

    .get('/notesByUsername', function(req, res) {

      if (req.isAuthenticated()) {

        Notes_db.find( {user: req.user.username}, function(err, collection) {

          !err ? res.json(collection) : console.log(err);
        });
      } else {
        res.send(400, 'please login at first');
      }

    })

    .get('/notes', function(req, res) {

      Notes_db.find( function(err, collection) {

        !err ? res.json(collection) : console.log(err);
      });
    });
};
