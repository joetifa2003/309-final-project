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

async function removeProductFromCarts(productID) {
  await CartItem.deleteMany({
    productID,
  });
}

async function getCartItems(userID) {
  const cartItems = await CartItem.find({ userID });
  const productIDs = cartItems.map((ci) => ci.productID);
  const ids = cartItems.map((ci) => ci.id);
  let products = [];
  for (let i = 0; i < productIDs.length; i++) {
    const product = await Product.findById(productIDs[i]);
    if (product) {
      products.push(product);
    }
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
  removeProductFromCarts,
};
