const app         = require('../../server');
const User        = require('../../schemas/User');
const request     = require('supertest').agent(app.listen());
const getTestUser = require('../../utils/test-helpers').getRandomUser;

describe('Auth :: Sign Up', () => {
  const testUser = getTestUser();

  after((done) => User.remove({ username: testUser.username }, done));

  it('should respond with 201 if user successfully created', done => {
    request
      .post('/auth/signup')
      .send(testUser)
      .expect(201, done);
  });

  it('test user should be exist in db', done => {
    const userFromDb = User.findOne({ username: testUser.username });
    return userFromDb.should.eventually.not.be.null.notify(done);
  });

  it('should respond with 400 - User already exist if user data invalid', done => {
    request
      .post('/auth/signup')
      .send(testUser)
      .expect(400, 'User already exist')
      .end(done);
  });

  it('should respond with 400 - Validation error if user data invalid', done => {
    testUser.password = `${testUser.password}!!!`;
    request
      .post('/auth/signup')
      .send(testUser)
      .expect(400, 'Validation error')
      .end(done);
  });
});
