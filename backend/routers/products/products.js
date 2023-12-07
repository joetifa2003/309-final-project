const express = require("express");
const { getAllProducts } = require("../../db/products");

const router = express.Router();

router.get("/", async (req, res) => {
    let products = await getAllProducts();
    res.json(products);
});

<<<<<<< HEAD:backend/products/products.js
router.get("/:id", async (req, res) => {
   
    
    

});
=======
router.get("/:id", async (req, res) => { });

>>>>>>> 0a467e727b2f2864c4fa9e339875723e18a21f1b:backend/routers/products/products.js
router.post("/add", async (req, res) => { });
router.delete("/delete", async (req, res) => { });

module.exports = router;
