const router = require('koa-router')();

router.get('/', require('./cockpit-ctrl'));

router.get('/login', require('./cockpit-login-ctrl').renderLoginForm);

router.post('/login', require('./cockpit-login-ctrl').checkAdminPermission);

module.exports = router.routes();
