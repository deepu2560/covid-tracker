// importing requried liberaries
const express = require("express");

require("dotenv").config();

// user model for getting or posting data.
const User = require("../models/userModels");

// authorization middleware to check for data this requried so that noone else can breakthrough and get data of users
const Autenticate = require("../middleware/authenticate");

// express router
const router = express.Router();

// importing register and login function
const { register, login } = require("./authControl");

// this is to get full detail of user from database
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

// router.post for register purpose
router.post("/register", register);

// router post for login purpose
router.post("/login", login);

// exporting router
module.exports = router;
