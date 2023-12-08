const Product = require("./schema/product");

async function getAllProducts() {
  return await Product.find();
}

async function getProductById(id) {
  return await Product.findById(id);
}

async function createProduct(name, price, img) {
  return await Product.create({
    name,
    price,
    imgUrl: img,
  });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
