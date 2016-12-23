var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cardApp");

module.exports.Card = require('./card.js');