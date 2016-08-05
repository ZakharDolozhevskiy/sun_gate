const mongoose         = require('mongoose');
const Schema           = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new Schema({
  size:       { type: String, required: true },
  price:      { type: Number, required: true },
  title:      { type: String, required: true },
  color:      { type: String, required: true },
  image_link: { type: String }
});

productSchema.plugin(mongoosePaginate);

productSchema.statics.getProducts = function getProducts(page) {
  return this.paginate({}, { page: page || 1, limit: 10 });
};

productSchema.statics.getProductById = function getProductById(id) {
  return this.findById(id).exec();
};

productSchema.statics.removeProduct = function removeProduct(id) {
  return this.findById(id).remove().exec();
};

productSchema.statics.removeAllProducts = function removeProduct() {
  return this.find().remove().exec();
};

const modelName = process.env.NODE_ENV === 'testing' ? 'TestProduct' : 'Product';

module.exports = mongoose.model(modelName, productSchema);
