const router             = require('koa-router')();
const getProductsCtrl    = require('./get-products-ctrl');
const manageProductsCtrl = require('./manage-products-ctrl');

router.get('/',
  getProductsCtrl.getProducts
);

router.get('/:id',
  getProductsCtrl.getDetails
);

router.post('/',
  manageProductsCtrl.checkAdminRights,
  manageProductsCtrl.createProduct
);

router.delete('/',
  manageProductsCtrl.checkAdminRights,
  manageProductsCtrl.removeAllProducts
);

router.delete('/:id',
  manageProductsCtrl.checkAdminRights,
  manageProductsCtrl.removeProduct
);

module.exports = router.routes();
