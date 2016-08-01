const app = require('../../server');
const request = require('supertest').agent(app.listen());

describe('GET /docs', () => {
  it('should respond with 200 - OK', done => {
    request
      .get('/docs')
      .expect(200, done);
  });
});
