const Product = require("./schema/product");

async function getAllProducts() {
  return await Product.find();
}

async function getProductById(id) {
  return await Product.findById(id);
}

module.exports = {
  getAllProducts,
  getProductById,
};
