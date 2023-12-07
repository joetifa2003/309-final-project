const Product = require("./schema/product");

async function getAllProducts() {
  return await Product.find();
}

module.exports = {
  getAllProducts,
};
