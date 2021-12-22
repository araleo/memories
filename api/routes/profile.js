const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/', profileController.getProfile);

router.post('/', profileController.createProfile);

module.exports = router;
