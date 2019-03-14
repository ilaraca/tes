const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const productSchema = new Schema({
  decription: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  imgPath: { type: String, default: 'https://assets.alfaconcursos.com.br/assets/gravatar-05682df21c0a7aeb3c40dfe27317390c7310900783d337d336f54e3b7f125ed2.png' },
  imgName: { type: String, default: 'images/default-avatar.png' }
});

productSchema.set('timestamps', true);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
