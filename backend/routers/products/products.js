const express = require("express");
const { getAllProducts } = require("../../db/products");
const { authenticatedAdmin } = require("../auth/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

router.get("/:id", async (req, res) => {});

router.post("/create", authenticatedAdmin, async (req, res) => {});
router.delete("/delete", authenticatedAdmin, async (req, res) => {});

module.exports = router;
