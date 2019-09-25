const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//RESERVE MODEL
const Reserved_Schema = new Schema({
  Email: { type: String, required: true },
  Tables: { type: Array, required: true },
  Comment: { type: String, required: false },
}, {
  timestamps: true,
});

const Reserved_Models = mongoose.model('Reserved_Models', Reserved_Schema);

module.exports = Reserved_Models;
