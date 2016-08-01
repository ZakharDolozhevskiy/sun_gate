const router     = require('koa-router')();
const controller = require('./profile-ctrl');

router.get('/', controller.me);

module.exports = router.routes();
