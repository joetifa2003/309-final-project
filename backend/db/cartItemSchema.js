const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartItemSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
