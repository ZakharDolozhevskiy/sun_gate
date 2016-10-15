const co      = require('co');
const app     = require('../../server');
const Product = require('../../schemas/Product');
const request = require('supertest').agent(app.listen());

const testProduct = {
  size:  'small',
  price: 100,
  color: 'white',
  title: 'test product'
};

const PRODUCTS_LIMIT = 12; // limit for products count per page (from Product schema)
const PRODUCTS_COUNT = 14; // added products for testing

function* addTestProducts() {
  for (let i = 0; i < PRODUCTS_COUNT; i++) yield Product.create(testProduct);
}

describe('Products:: List && Pagination && Product by ID', () => {
  before(done => co(addTestProducts).then(() => done()));
  after(done => Product.removeAllProducts().then(() => done()));

  it('should respond with products list with correct count', done => {
    request
      .get('/products')
      .expect(200)
      .expect(res => {
        if (res.body.docs.length !== PRODUCTS_LIMIT) {
          throw Error('invalid product count');
        }
      })
      .end(done);
  });

  it('should implement pagination and respond with correct products count', done => {
    request
      .get('/products?page=2')
      .expect(200)
      .expect(res => {
        if (res.body.docs.length !== PRODUCTS_COUNT - PRODUCTS_LIMIT) {
          throw Error('invalid product count in the second page');
        }
      })
      .end(done);
  });

  it('should response with product by product id', done => {
    Product.findOne({}, (err, product) => {
      request
        .get(`/products/${product._id}`)
        .expect(200)
        .expect(res => {
          if (res.body._id === product._id) { throw Error('users id is not that was expected'); }
        })
        .end(done);
    });
  });
});
