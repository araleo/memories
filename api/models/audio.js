const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Audio', audioSchema);
