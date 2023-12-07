const express = require("express");
const { authenticated } = require("../auth/auth");
const { addToCart, removeFromCart, getCartItems } = require("../../db/cart");
const router = express.Router();

router.post("/add", authenticated, async (req, res) => {
    const userID = req.user.id;
    const { productID } = req.body;
    await addToCart(userID, productID);
});

router.delete("/remove", authenticated, async (req, res) => {
    const userID = req.user.id;
    const { productID } = req.body;
    await removeFromCart(userID, productID);
});

router.get("/getItems", authenticated, async (req, res) => {
  const userID = req.user.id;
  const cartItems = await getCartItems(userID);
});

module.exports = router;
