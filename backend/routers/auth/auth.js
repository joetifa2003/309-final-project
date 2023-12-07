const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, getUserByEmail, getUserById } = require("../../db/auth");

const router = express.Router();

const JWT_SECERT = "asdaskldjaskldjasdasdkljalskdjaklsdjalksdj";

const authenticated = async (req, res, next) => {
  const { token } = req.body;

  try {
    const payload = jwt.verify(token, JWT_SECERT);
    req.auth = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid token",
    });
  }
};

const authenticatedAdmin = async (req, res, next) => {
  const { token } = req.body;

  try {
    const payload = jwt.verify(token, JWT_SECERT);
    const userId = payload.id;
    const user = await getUserById(userId);
    if (!user.isAdmin) {
      throw new Error("not admin");
    }
    req.auth = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid token",
    });
  }
};

router.get("/me", authenticated, async (req, res) => {
  res.json(req.auth);
});

router.post("/signup", async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).json({
      message: "invalid input",
    });
    return;
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  await createUser(email, name, passwordHash);

  res.json({
    message: "user created",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "invalid input",
    });
    return;
  }

  let user = await getUserByEmail(email);
  if (!user) {
    res.status(400).json({
      message: "user not found",
    });
    return;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    res.status(401).json({
      message: "unautorized",
    });
    return;
  }

  const token = jwt.sign({ email: user.email, id: user.id }, JWT_SECERT, {
    expiresIn: "10h",
  });

  res.json({
    token,
  });
});

module.exports = {
  router,
  authenticated,
  authenticatedAdmin,
};
