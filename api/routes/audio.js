const express = require('express');

const audioController = require('../controllers/audio');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello Audios');
});

router.post('/', audioController.createAudio);

module.exports = router;
