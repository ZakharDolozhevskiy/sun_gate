const passport = require('koa-passport');

/**
 * Process user log in flow
 * Use passport to identify user
 * Waiting for request with <password: String> <username: String> that exist in db.
 */
module.exports.login = function* loginCtrl() {
  yield* passport.authenticate('local', function* (err, user) {
    // save user in session
    if (!err && user) {
      yield this.login(user);
      this.status = 202;
    } else {
      this.status = 401; // if user doesn't exist or err occurs
    }
  }.bind(this)).call(this);
};

module.exports.logout = function* logout() {
  this.logout();
  this.status = 200;
};
