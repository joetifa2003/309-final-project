const express = require("express");
const { getAllProducts } = require("../db/products");

const router = express.Router();

router.get("/", async (req, res) => {
    let products =await getAllProducts();
    res.json(products);
 });

router.get("/:id", async (req, res) => {
   
    
    

});
router.post("/add", async (req, res) => { });
router.delete("/delete", async (req, res) => { });

module.exports = router;
