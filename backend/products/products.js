const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => { });

router.get("/:id", async (req, res) => { });
router.post("/add", async (req, res) => { });
router.delete("/delete", async (req, res) => { });
console.log("Moustafa");

module.exports = router;
