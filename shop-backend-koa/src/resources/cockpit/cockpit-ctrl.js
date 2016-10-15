const User           = require('../../schemas/User');
const React          = require('react');
const config         = require('../../config/environment');
const Provider       = require('react-redux/lib/components/Provider').default;
const createStore    = require('redux/lib/createStore').default;
const renderToString = require('react-dom/server').renderToString;

// Front-end application to server side rendering
const Root     = require(`${config.root}/front-end/src/containers/root`).default;
const reducers = require(`${config.root}/front-end/src/reducers`).default;

module.exports = function* cockpitRender() {
  const isAdmin = this.isAuthenticated() && User.checkAdmin(this.passport.user);

  if (!isAdmin) this.redirect('/cockpit/login');

  const store = createStore(reducers);
  const html = renderToString(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  yield this.render('cockpit.jade', {
    html,
    initState: JSON.stringify(store.getState())
  });
};
