module.exports.me = function* me() {
  if (this.isAuthenticated()) {
    this.body = this.passport;
    this.status = 200;
  } else {
    this.status = 403;
  }
};
