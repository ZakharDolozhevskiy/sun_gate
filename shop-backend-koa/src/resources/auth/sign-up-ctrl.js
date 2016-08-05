const User = require('../../schemas/User');

/**
 * Validate required user data for sign up
 * @param body {Object} - all fields are required
 *  @property email {String} - valid email. should be unique,
 *  @property username {String} - valid username. should be unique,
 *  @property password {String} - password should be more than 6 chars length
 *  @property passwordConfirm {String} - the same
 * @returns {boolean}
 */
function isValidData(body) {
  if (!body.email || !body.password || !body.username) {
    return false;
  }
  return !(body.password.length < 6 || body.password !== body.passwordConfirm);
}

/**
 * Create new user after next step:
 * - validate sign up data
 * - check if user doesn't exist in db
 */
module.exports.signup = function* signUpCtrl() {
  const body = this.request.body;
  const isUserExist = yield User.isUserExist(body.username);

  if (!isValidData(body)) { this.throw(400, 'Validation error'); }

  if (isUserExist) { this.throw(400, 'User already exist'); }

  yield User.create(Object.assign({}, body, { admin: undefined }));

  this.status = 201;
};
