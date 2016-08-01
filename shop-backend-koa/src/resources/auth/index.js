const router = require('koa-router')();

router.post('/login', require('./login-ctrl').login);
router.get('/logout', require('./login-ctrl').logout);
router.post('/signup', require('./sign-up-ctrl').signup);

module.exports = router.routes();
