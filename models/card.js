var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var CardSchema = new Schema({
  question: String
});




module.exports = mongoose.model('Card', CardSchema);
