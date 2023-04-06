const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

// Schema to create Student model
const Userschema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

Userschema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', Userschema);

module.exports = User;
