const React          = require('react');
const config         = require('../../config/environment');
const passport       = require('koa-passport');
const LoginForm      = require(`${config.frontEndDist}/src/components/login-form`);
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
  yield this.render('cockpit-login.jade', getRenderedComponent());
};

module.exports.checkAdminPermission = function* checkAdminPermission() {
  yield* passport.authenticate('local', function* (err, user) {
    if (!err && user.admin) {
      yield this.login(user);
      this.redirect('/cockpit');
    } else {
      this.status = 403;
      this.logout();
      yield this.render('cockpit-login.jade', getRenderedComponent(true));
    }
  }.bind(this)).call(this);
};
