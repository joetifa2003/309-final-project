const express = require("express");
const { authenticated } = require("../auth/auth");
const { addToCart, removeFromCart, getCartItems } = require("../../db/cart");
const router = express.Router();

router.post("/add", authenticated, async (req, res) => {
  const userID = req.user.id;
  const { productID } = req.body;
  await addToCart(userID, productID);
  res.json({
    message: "added to cart",
  });
});

router.post("/remove", authenticated, async (req, res) => {
  const userID = req.user.id;
  const { productID } = req.body;
  await removeFromCart(userID, productID);
  res.json({
    message: "removed to cart",
  });
});

router.get("/products", authenticated, async (req, res) => {
  const userID = req.user.id;
  const products = await getCartItems(userID);
  res.json(products);
});

module.exports = router;
