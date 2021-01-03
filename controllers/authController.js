const generateToken = require('../utils/generateToken');

const authController = {};

authController.signUp = async (req, res) => {
  const token = generateToken({ user: req.user }, 'TOP_SECRET');
  res.cookie('token', token, { httpOnly: true });

  res.json({
    message: 'Signup successful',
    user: req.user,
  });
};

authController.login = async (req, res) => {
  res.cookie('token', req.token, { httpOnly: true });
  res.json({
    message: 'Successfully logged in',
  });
};

module.exports = authController;
