// So far this is not built to support multiple profiles

const Profile = require('../models/profile');

exports.createProfile = (req, res, next) => {
  const profile = new Profile({
    name: 'Helena Barreto Duarte',
    birth: new Date(1930, 1, 1),
    placeOfBirth: 'Paraibuna/SP',
    profileImage: 'Foto',
  });
  profile
    .save()
    .then((result) => res.status(201).json({ success: true, profile: result }))
    .catch((err) => console.log(err));
};

exports.getProfile = (req, res, next) => {
  Profile.find().then((data) => {
    res.status(201).json({ success: true, data: data });
  });
};
