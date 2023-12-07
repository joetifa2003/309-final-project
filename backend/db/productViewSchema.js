const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productsViewsSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String
  },
  rating: {
    type: Number
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

const ProductsViews = mongoose.model('ProductsViews', productsViewsSchema);
module.exports = ProductsViews;
