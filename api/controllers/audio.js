const Audio = require('../models/audio');

exports.getAudios = (req, res, next) => {
  Audio.find()
    .then((data) => res.status(201).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ error: true }));
};
