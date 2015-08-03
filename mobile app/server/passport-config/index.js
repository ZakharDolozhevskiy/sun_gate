var bcrypt = require('bcryptjs'),
    messages = require('../messages'),
    passport = require('passport'),
    Users_db = require('../db_model/users'),
    LocalStrategy = require('passport-local').Strategy;

function comparePsw(psw, db_psw) {
  return bcrypt.compareSync(psw, db_psw);
}

module.exports = function () {
  passport.use(new LocalStrategy(
    function (username, password, done) {
      Users_db.findOne({username: username}, function(err, user) {

        if (err) { return done(err); }

        if (!user) { return done(err, false, messages.userNotFound); }

        return comparePsw(password, user.password)
          ? done(err, user, messages.loginSuccess)
          : done(err, false, messages.pswIncorrect);
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    Users_db.findById(id, function(err,user){
      err ? done(err) : done(null, user);
    });
  });
};