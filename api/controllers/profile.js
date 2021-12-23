// So far this is not built to support multiple profiles

const Profile = require('../models/profile');

exports.getProfile = (req, res, next) => {
  Profile.findOne()
    .then((data) => res.status(201).json({ success: true, data: data }))
    .catch((err) => res.status(500).json({ error: true }));
};
