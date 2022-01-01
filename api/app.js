const express = require('express');
const mongoose = require('mongoose');

const profileRoutes = require('./routes/profile');
const photosRoutes = require('./routes/photos');
const audiosRoutes = require('./routes/audios');
const commentsRoutes = require('./routes/comments');
const config = require('./config/config');

const app = express();
const port = 3000;
const host = '0.0.0.0';
const mongoUser = config.mongoUser;
const mongoPass = config.mongoPass;
const mongoUri = config.mongoUri;
const mongoUrl = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoUri}`;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/profile', profileRoutes);
app.use('/photos', photosRoutes);
app.use('/audios', audiosRoutes);
app.use('/comments', commentsRoutes);

mongoose
  .connect(mongoUrl)
  .then((result) => {
    app.listen(port, host, () => {
      console.log(`App listening at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
