const express = require('express');

const audioController = require('../controllers/audio');

const router = express.Router();

router.get('/', audioController.getAudios);

module.exports = router;
