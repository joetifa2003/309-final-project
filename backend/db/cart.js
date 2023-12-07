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

module.exports = {
  addToCart,
  removeFromCart,
};
