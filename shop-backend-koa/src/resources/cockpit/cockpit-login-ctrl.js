const React          = require('react');
const passport       = require('koa-passport');
const LoginForm      = require('./login-form.jsx');
const ReactDOMServer = require('react-dom/server');

function getRenderedComponent(errors = null) {
  const elem = React.createElement(LoginForm, { errors });

  return {
    content:   ReactDOMServer.renderToStaticMarkup(elem),
    isErrors:  !!errors,
    pageTitle: 'Login Page'
  };
}

module.exports.renderLoginForm = function* renderLoginForm() {
  yield this.render('login-page.jade', getRenderedComponent());
};

module.exports.checkAdminPermission = function* checkAdminPermission() {
  yield* passport.authenticate('local', function* (err, user) {
    if (!err && user.admin) {
      yield this.login(user);
      this.redirect('/cockpit');
    } else {
      this.status = 403;
      this.logout();
      yield this.render('login-page.jade', getRenderedComponent(true));
    }
  }.bind(this)).call(this);
};
