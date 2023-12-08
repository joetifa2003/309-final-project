const User = require("./schema/user");

async function createUser(email, name, password, img) {
  return await User.create({
    name,
    email,
    password,
    imgUrl: img,
  });
}
async function deleteProduct(productId) {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
}

async function getUserByEmail(email) {
  return await User.findOne({ email });
}

async function getUserById(id) {
  return await User.findById(id);
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  deleteProduct,
};
