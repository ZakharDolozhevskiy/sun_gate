const Product = require('../../schemas/Product');

module.exports.getProducts = function* getProducts() {
  const query = this.request.query;
  this.body = yield Product.getProducts(query.page);
};

module.exports.getDetails = function* getDetails() {
  try {
    this.body = yield Product.getProductById(this.params.id);
  } catch (err) {
    this.status = 404;
  }
};
