const passport = require('passport');
const generateToken = require('../../utils/generateToken');

module.exports = async (req, res, next) => {
  passport.authenticate('login', async (err, user) => {
    try {
      if (err || !user) {
        return res.json(err);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return res.json(error);

        const body = { _id: user._id, email: user.email };
        const token = generateToken({ user: body }, 'TOP_SECRET');
        req.token = token;

        return next();
      });
    } catch (error) {
      return res.json(error);
    }
  })(req, res, next);
};
