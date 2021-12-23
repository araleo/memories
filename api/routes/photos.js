const express = require('express');

const router = express.Router();

const photoController = require('../controllers/photo');

router.get('/', photoController.getPhotos);

module.exports = router;
