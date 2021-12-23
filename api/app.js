const express = require('express');
const mongoose = require('mongoose');

const profileRoutes = require('./routes/profile');
const photosRoutes = require('./routes/photos');
const audioRoutes = require('./routes/audio');
const commentsRoutes = require('./routes/comments');

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use('/profile', profileRoutes);
app.use('/photos', photosRoutes);
app.use('/audio', audioRoutes);
app.use('/comments', commentsRoutes);


const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoUrl = `mongodb+srv://${mongoUser}:${mongoPass}@memories.kix5u.mongodb.net/memories?retryWrites=true&w=majority`

mongoose
  .connect(mongoUrl)
  .then((result) => {
    app.listen(port, host, () => {
      console.log(`App listening at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
