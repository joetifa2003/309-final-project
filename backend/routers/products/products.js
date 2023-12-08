const express = require("express");
const { getAllProducts, createProduct } = require("../../db/products");
const { authenticatedAdmin } = require("../auth/auth");
const { uploadHandler } = require("../upload/upload");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

router.get("/:id", async (req, res) => {});

router.post(
  "/create",
  authenticatedAdmin,
  uploadHandler.single("productImg"),
  async (req, res) => {
    const product = await createProduct(
      req.body.name,
      req.body.price,
      req.file.filename,
    );
    res.json(product);
  },
);

router.delete("/delete", authenticatedAdmin, async (req, res) => {});

module.exports = router;
