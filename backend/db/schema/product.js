const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
productSchema.index({ name: "text", "product.name": "text" });
productSchema.index({ name: "text", "product.desc": "text" });

module.exports = Product;
