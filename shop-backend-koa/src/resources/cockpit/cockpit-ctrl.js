const User = require('../../schemas/User');

module.exports = function* cockpitRender() {
  const isAdmin = this.isAuthenticated() && User.checkAdmin(this.passport.user);

  if (!isAdmin) this.redirect('/cockpit/login');

  yield this.render('cockpit.jade');
};
