const app = require('../../server');
const request = require('supertest').agent(app.listen());

describe('GET /', () => {
  it('should respond with 202', done => {
    request
    .get('/')
    .expect(202, done);
  });
});
