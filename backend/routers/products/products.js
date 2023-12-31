const express = require("express");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct,
  searchProducts,
} = require("../../db/products");
const { authenticatedAdmin } = require("../auth/auth");
const { uploadHandler } = require("../upload/upload");

const router = express.Router();

router.get("/", async (req, res) => {
  let products;
  if (req.query.q) {
    products = await searchProducts(req.query.q);
  } else {
    products = await getAllProducts();
  }

  res.json(products);
});

router.get("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await getProductById(productId);
  res.json(product);
});

router.post(
  "/create",
  authenticatedAdmin,
  uploadHandler.single("productImg"),
  async (req, res) => {
    const { name, price, desc } = req.body;
    if (!name || !price || !desc) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await createProduct(
      req.body.name,
      req.body.price,
      req.file.filename,
      req.body.desc,
    );
    res.json(product);
  },
);

// delete product usingProduct id, it will be productID in body
router.delete("/:productId", authenticatedAdmin, async (req, res) => {
  const productId = req.params.productId;
  const deletedProduct = await deleteProduct(productId);
  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: "Product deleted successfully", deletedProduct });
});

// take name and price from body, then update the db
router.post(
  "/edit",
  authenticatedAdmin,
  uploadHandler.none(),
  async (req, res) => {
    const { name, price, desc, productID } = req.body;
    if (!name || !price || !desc || !productID) {
      console.log(req.body);
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await updateProduct(
      productID,
      req.body.name,
      req.body.price,
      req.body.desc,
    );

    res.json(product);
  },
);

module.exports = router;
