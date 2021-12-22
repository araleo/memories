const Audio = require('../models/audio');

exports.createAudio = (req, res, next) => {
  const audio = new Audio({
    url: '123',
    description: 'abc',
  });
  audio
    .save()
    .then((result) => res.status(201).json({ success: true, audio: result }))
    .catch((err) => res.status(500).json({ error: true }));
};
