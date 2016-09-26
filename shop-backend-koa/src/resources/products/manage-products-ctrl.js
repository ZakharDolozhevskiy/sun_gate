const User    = require('../../schemas/User');
const Product = require('../../schemas/Product');
const parsers = require('../../utils/parsers');

module.exports.checkAdminRights = function* checkAdminRights(next) {
  if (!this.isAuthenticated() || !User.checkAdmin(this.passport.user)) {
    this.status = 403;
  } else {
    yield next;
  }
};

module.exports.createProduct = function* createProduct() {
  const body = this.request.body;
  const payload = Object.assign(
    body.fields,
    { image_link: parsers.getRelativePath(body.files.photo) }
  );

  try {
    yield Product.create(payload);
    this.status = 201;
  } catch (err) {
    this.body = err;
    this.status = 400;
  }
};

module.exports.removeProduct = function* removeProduct() {
  try {
    yield Product.removeProduct(this.params.id);
    this.status = 201;
  } catch (err) {
    this.status = 404;
  }
};

module.exports.removeAllProducts = function* deleteAllProducts() {
  try {
    yield Product.removeAllProducts();
    this.status = 201;
  } catch (err) {
    this.status = 404;
  }
};