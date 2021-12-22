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
    .then((result) => {
      console.log(result);
      res.status(201).json({ success: true, profile: result });
    })
    .catch((err) => console.log(err));
};
