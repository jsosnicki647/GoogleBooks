var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({

  title: {
    type: String,
    trim: true
  },
  authors: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
   image: {
    type: String,
    trim: true
  },
   link: {
    type: String,
    trim: true
  },
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

module.exports = Book;