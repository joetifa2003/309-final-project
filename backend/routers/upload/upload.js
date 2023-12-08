const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/:filename", (req, res) => {
  const p = path.join(__dirname, "../../uploads/");
  res.sendFile(p + req.params.filename);
});

module.exports = { router, uploadHandler: upload };
