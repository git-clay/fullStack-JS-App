var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// models/book.js
var CardSchema = new Schema({
  question: String
});




module.exports = mongoose.model('Card', CardSchema);
