const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  decription: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  imgPath: { type: String, default: 'https://loja.colormaq.com.br/tema/colormaq/img/produtos/default.jpg' }
});

productSchema.set('timestamps', true);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
