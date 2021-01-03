const passport = require('passport');

module.exports = passport.authenticate('signup', { session: false });
