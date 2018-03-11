const express = require('express');

const AuthControllers = require('../controllers/auth');

const router = express.Router();

router.post('/signup',AuthControllers.signup);
router.post('/signin',AuthControllers.signin);

module.exports = router;