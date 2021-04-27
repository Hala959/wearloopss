const mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },

  Color: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  Brand: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  City: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
