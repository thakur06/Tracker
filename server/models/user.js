const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  photoURL: { type: String },
  provider: { type: String, default: 'google' },
  createdAt: { type: Date, default: Date.now },
  googleTokens: { type: Object },
});

module.exports = mongoose.model('User', userSchema); 