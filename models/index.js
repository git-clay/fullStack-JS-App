var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cardApp");
mongoose.Promise= global.Promise;

module.exports.Card = require('./card.js');