// models/User.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  andress: { type: String },
  product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  service: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
  comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  imgPath: { type: String, default: 'https://assets.alfaconcursos.com.br/assets/gravatar-05682df21c0a7aeb3c40dfe27317390c7310900783d337d336f54e3b7f125ed2.png' }
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
