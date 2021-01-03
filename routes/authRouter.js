const express = require('express');
const authController = require('../controllers/authController');
const { signUp, login } = require('../middlewares/auth');

const router = express.Router();

router.post('/signup', signUp, authController.signUp);

router.post('/login', login, authController.login);

module.exports = router;
