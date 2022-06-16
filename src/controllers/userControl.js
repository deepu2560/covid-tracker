const express = require("express");

require("dotenv").config();

const User = require("../models/userModels");

const Autenticate = require("../middleware/authenticate");

const router = express.Router();

const { register, login } = require("./authControl");

router.get("/user", Autenticate, async (req, res) => {
  try {
    const user = req.user;

    console.log(`==> getting user data for ${user.name}`);
    res.status(201).send({ error: false, token: user });
  } catch (error) {
    console.log("==> getting user Error", error);
    res.status(500).send({ error: true, token: "Server error" });
  }
});

router.post("/register", register);

router.post("/login", login);

module.exports = router;
