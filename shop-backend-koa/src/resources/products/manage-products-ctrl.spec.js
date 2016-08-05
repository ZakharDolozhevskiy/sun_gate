const co      = require('co');
const fs      = require('fs');
const app     = require('../../server');
const path    = require('path');
const Product = require('../../schemas/Product');
const request = require('supertest').agent(app.listen());

const privilegedUser = require('../../utils/test-helpers').getPrivilegedUser();

const testProduct = {
  size:  'small',
  price: 100,
  color: 'white',
  title: 'test product'
};

function addProduct(valid) {
  return request
    .post('/products')
    // set invalid key if valid flag = false
    .field(valid && 'size', testProduct.size)
    .field('price', testProduct.price)
    .field('color', testProduct.color)
    .field('title', testProduct.title)
    .attach('avatar', path.join(__dirname, '../../public/stubs/test-img.jpg'));
}

function removeTestImg() {
  fs.unlinkSync(path.join(__dirname, '../../public/images/test-img.jpg'));
}

function isImgAdded(cb) {
  const path2 = path.join(__dirname, '../../public/images/test-img.jpg');
  const isAdd = fs.lstatSync(path2).isFile();

  if (!isAdd) throw Error('image file doesn\'t add to public folder');

  cb();
}

describe('Products:: Add && Remove && Remove all', () => {
  before(done => {
    Product.create(testProduct, done);
  });

  after(done => {
    removeTestImg();
    Product.removeAllProducts().then(() => done());
  });

  it('should not add product without admin rights', done => {
    addProduct(true)
      .expect(403, done);
  });

  it('should not delete products without admin rights', done => {
    Product.findOne({}, (err, product) => {
      request
        .delete(`/products/${product._id}`)
        .expect(403, done);
    });
  });

  it('should not delete all products without admin rights', done => {
    request
      .delete('/products')
      .expect(403, done);
  });

  it('should login user with admin permision', done => {
    request
      .post('/auth/login')
      .send({ username: privilegedUser.username, password: privilegedUser.password })
      .expect(202, done);
  });

  it('should not add product with invalid data', done => {
    addProduct(false)
      .expect(400, done);
  });

  it('should add product with valid data', done => {
    addProduct(true)
      .expect(201)
      .end(() => isImgAdded(done));
  });

  it('should delete product by product id', done => {
    Product.findOne({}, (err, product) => {
      request
        .delete(`/products/${product._id}`)
        .expect(210)
        .end(() => {
          Product.getProductById(product._id)
            .then((error, productByID) => {
              if (error || productByID) throw Error('product wasn\'t removed by id');
              done();
            });
        });
    });
  });

  it('should delete all products in collection', done => {
    request
      .delete('/products')
      .expect(210)
      .end(() => {
        Product.findOne({}, (err, product) => {
          if (err || product) throw Error('products wasn\'t removed');
          done();
        });
      });
  });
});
