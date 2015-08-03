var bcrypt = require('bcryptjs'),
    messages = require('../messages'),
    bcrypt_key = 8,
    passport = require('passport'),
    Users_db = require('../db_model/users');

require('../passport-config')();

function isRegistered(key, cb) {
  Users_db.find({ username: key }, cb);
}

function register(req, res) {
  var user = req.body;
      user.password = bcrypt.hashSync(user.password, bcrypt_key);

  isRegistered(user.username, function(err, data) {

    if (!data.length) {
      Users_db.create(user, function(err) {
        err ? console.log(err) : res.send(200, messages.userRegistered);
      });
    } else {
      res.send(400, messages.userAlreadyExist);
    }
  });
}

function login(req, res, next) {

  passport.authenticate('local', function(err, user, info) {

      if (err) { return next(err); }

      if (user) {
        req.logIn(user, function(err) { err ? next(err) : res.send(200, user.username);});
      } else {
        res.send(400, info);
      }
  })(req, res, next);
}

function checkLogin(req, res) {
  req.isAuthenticated() ? res.send(200, req.user.username) : res.send(200, null);
}

function logout(req, res) {
  req.logout();
  res.send(200);
}

module.exports = function(app) {
  app.post('/register', register);
  app.post('/login', login);
  app.post('/logout', logout);
  app.post('/isLogin', checkLogin);
};
