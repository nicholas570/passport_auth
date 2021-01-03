const express = require('express');
const authRouter = require('./authRouter');
const secureRouter = require('./secureRouter');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

router.use('/auth', authRouter);

router.use('/user', authenticate, secureRouter);

module.exports = router;
