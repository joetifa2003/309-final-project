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
  const productIDs = cartItems.map((ci) => ci.productID);
  const ids = cartItems.map((ci) => ci.id);
  let products = [];
  for (let i = 0; i < productIDs.length; i++) {
    products.push(await Product.findById(productIDs[i]));
  }

  for (let i = 0; i < products.length; i++) {
    products[i] = {
      _id: products[i].id,
      name: products[i].name,
      price: products[i].price,
      imgUrl: products[i].imgUrl,
      ciID: ids[i],
    };
  }

  return products;
}

module.exports = {
  addToCart,
  removeFromCart,
  getCartItems,
};
