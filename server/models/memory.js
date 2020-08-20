const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Memories = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true
  },
  ip_address: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
});

Memories.plugin(uniqueValidator);
Memories.set('autoIndex', false);

module.exports = mongoose.model('memories', Memories);
