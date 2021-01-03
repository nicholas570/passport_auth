const express = require('express');
const profilController = require('../controllers/profileController');

const router = express.Router();

router.get('/profile', profilController.display);

module.exports = router;
