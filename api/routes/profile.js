const express = require('express');

const profileController = require('../controllers/profile');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Hello Profile');
});

router.post('/', profileController.createProfile);

module.exports = router;
