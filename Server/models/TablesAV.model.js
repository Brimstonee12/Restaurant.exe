const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//TABLES MODEL
const TablesAV_Schema = new Schema({
  table1: { type: String, required: true },
  sits: { type: String, required: true },
  available: { type: String, required: true },
}, {
  timestamps: true,
});

const TablesAV_Models = mongoose.model('TablesAV_Models', TablesAV_Schema);

module.exports = TablesAV_Models;
