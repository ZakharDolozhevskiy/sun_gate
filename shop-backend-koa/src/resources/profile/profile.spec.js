const app         = require('../../server');
const User        = require('../../schemas/User');
const request     = require('supertest').agent(app.listen());
const getTestUser = require('../../utils/test-helpers').getRandomUser;

describe('GET /profile', () => {
  const testUser = getTestUser();

  describe('Logged user', () => {
    before(done => {
      User.create(testUser, err => {
        !err && request
          .post('/auth/login')
          .send({ username: testUser.username, password: testUser.password })
          .end(done);
      });
    });

    after(done => User.remove({ username: testUser.username }, done));

    it('should respond with 200 and users data if user logged in', done => {
      request.get('/profile')
        .expect(200)
        .end((err, res) => {
          if (!res.body.user) { throw new Error("user profile information doesn't exist"); }
          done();
        });
    });
  });

  describe('Guest', () => {
    before(done => request.get('/auth/logout').end(done));

    it('should respond with 403 for un logged users', done => {
      request
        .get('/profile')
        .expect(403, done);
    });
  });
});
