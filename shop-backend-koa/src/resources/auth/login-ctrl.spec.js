const app         = require('../../server');
const User        = require('../../schemas/User');
const request     = require('supertest').agent(app.listen());
const getTestUser = require('../../utils/test-helpers').getRandomUser;

describe('Auth :: Log In && Log out', () => {
  const testUser = getTestUser();
  const testUser2 = getTestUser();

  before((done) => User.create(testUser, done));
  after((done) => User.remove({ username: testUser.username }, done));

  it('should respond with 202 if user successfully logged', done => {
    request
      .post('/auth/login')
      .send({ username: testUser.username, password: testUser.password })
      .expect(202, done);
  });

  it('should respond with 401 if credential are invalid or errors occurs', done => {
    request
      .post('/auth/login')
      .send({ username: testUser2.username, password: testUser2.password })
      .end(done);
  });

  it('should logout user and clear session', done => {
    request
      .get('/auth/logout')
      .expect(200, done);
  });

  it('should not get username after logout', done => {
    request
      .get('/profile')
      .expect(403, done);
  });
});
