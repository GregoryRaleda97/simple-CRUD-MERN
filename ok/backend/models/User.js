
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  nama: {
    type: String
  },
  umur: {
    type: Number
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)