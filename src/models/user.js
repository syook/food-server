
const db = require('../config/db');
const Schema = require('mongoose').Schema;

const UserSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },  
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
    },
    chapatiCount: {
        type: Number,
    }

  },
  {
    timestamps: true
  }
);


module.exports = db.model('User', UserSchema);
