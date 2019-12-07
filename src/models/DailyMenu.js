const db = require('../config/db');
const Schema = require('mongoose').Schema;

const UserDataSchema = new Schema({
  [Schema.Types.ObjectId]: {
    type: Schema.Types.ObjectId
  }
});

const DailyMenuSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now,
      required: true
    },
    breakfastItems: {
      type: [Schema.Types.ObjectId],
      ref: 'FoodItem'
    },
    lunchItems: {
      type: [Schema.Types.ObjectId],
      ref: 'FoodItem'
    },
    usersData: {
      [Schema.Types.ObjectId]: {
        chapatiCount: {
          type: Number
        },
        breakfast: {
          type: Boolean,
          default: true
        },
        lunch: {
          type: Boolean,
          default: true
        }
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = db.model('DailyMenu', DailyMenuSchema);
