const CartItem = require("./schema/cartItem");
const Product = require("./schema/product");

async function addToCart(userID, productID) {
  await CartItem.create({
    userID,
    productID,
  });
}

async function removeFromCart(userID, productID) {
  await CartItem.findOneAndRemove({
    userID,
    productID,
  });
}

async function getCartItems(userID) {
  const cartItems = await CartItem.find({ userID });
  const productIDs = cartItems.map((ci) => ci.productID); // 1, 3, 5
  const products = await Product.find({ _id: { $in: productIDs } });

  return products;
}

module.exports = {
  addToCart,
  removeFromCart,
  getCartItems,
};
