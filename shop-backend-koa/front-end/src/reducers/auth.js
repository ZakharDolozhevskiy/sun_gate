import constants from '../constants';

export default {
  [constants.LOGOUT_SUCCESS]: () => {
    window.location.href = 'http://localhost:3000/cockpit/login';
  }
}
