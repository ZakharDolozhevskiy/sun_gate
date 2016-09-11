const app     = require('../../server');
const expect  = require('chai').expect;
const request = require('supertest').agent(app.listen());

const testUser = require('../../utils/test-helpers').getRandomUser();
const privilegedUser = require('../../utils/test-helpers').getPrivilegedUser();

describe('Cockpit :: Render Login and Cockpit pages && Admin permission check', () => {

  before(done => request.get('/auth/logout').end(done));

  it('should redirect to login page if user is not authorized as admin', done => {
    request
      .get('/cockpit')
      .expect('Location', '/cockpit/login', done);
  });

  it('should return login page by /cockpit/login endpoint', done => {
    request
      .get('/cockpit/login')
      .expect(200)
      .end((err, src) => {
        expect(src.text).to.contain('<title>Login Page</title>');
        done();
      });
  });

  it('should return login page with error msg and status 403 if user have wrong creds', done => {
    request
      .post('/cockpit/login')
      .send({ username: testUser.username, password: testUser.password })
      .expect(403)
      .end((err, src) => {
        expect(src.text).to.contain('<h5 class="errors">');
        done();
      });
  });

  it('should redirect to cockpit page if user authorized as admin', done => {
    request
      .post('/cockpit/login')
      .send({ username: privilegedUser.username, password: privilegedUser.password })
      .expect('Location', '/cockpit', done);
  });

  it('should render cockpit page by /cockpit if user authorized as admin', done => {
    request
      .get('/cockpit')
      .expect(200)
      .end((err, src) => {
        expect(src.text).to.contain('<title>Cockpit</title>');
        done();
      });
  });

});

