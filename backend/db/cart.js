const CartItem = require("./schema/cartItem");

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
  const cartItems = await CartItem.find({userID});
  return cartItems;
}

module.exports = {
  addToCart,
  removeFromCart,
  getCartItems,
};
