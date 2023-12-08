const Product = require("./schema/product");

async function getAllProducts() {
  return await Product.find();
}

async function getProductById(id) {
  return await Product.findById(id);
}

async function createProduct(name, price, img, desc) {
  return await Product.create({
    name,
    price,
    imgUrl: img,
    desc,
  });
}

async function deleteProduct(productId) {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
