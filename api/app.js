const express = require('express');
const mongoose = require('mongoose');

const profileRoutes = require('./routes/profile');
const photosRoutes = require('./routes/photos');
const audiosRoutes = require('./routes/audios');
const commentsRoutes = require('./routes/comments');

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use('/profile', profileRoutes);
app.use('/photos', photosRoutes);
app.use('/audios', audiosRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

mongoose
  .connect('mongodb://root:root@mongo:27017/memories')
  .then((result) => {
    app.listen(port, host, () => {
      console.log(`App listening at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
