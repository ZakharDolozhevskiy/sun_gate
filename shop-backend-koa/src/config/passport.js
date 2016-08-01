const User          = require('../schemas/User');
const passport      = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => User.findById(id, done));

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username, password }, done);
}));
