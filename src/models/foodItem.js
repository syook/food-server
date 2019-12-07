const db = require('../config/db');
const Schema = require('mongoose').Schema;

const FoodItem = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['lunch', 'breakfast'],
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = db.model('FoodItem', FoodItem);
