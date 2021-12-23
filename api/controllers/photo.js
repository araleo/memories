const Photo = require('../models/photo');

exports.getPhotos = (req, res, next) => {
  Photo.find()
    .then((data) => res.status(201).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ error: true }));
};
