const express = require("express");
const { getAllProducts, createProduct,deleteProduct } = require("../../db/products");
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

// delete product usingProduct id, it will be productID in body
  router.delete(
    '/delete/:productId',
    authenticatedAdmin,
    async (req, res) => {
        const productId = req.params.productId;
        const deletedProduct = await deleteProduct(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully', deletedProduct });
}
);



// take name and price from body, then update the db
router.post("/edit", authenticatedAdmin, async (req, res) => {});

module.exports = router;
