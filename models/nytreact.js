const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nytreactSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  snippet:{
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Nytreact = mongoose.model("Nytreact", nytreactSchema);

module.exports = Nytreact;