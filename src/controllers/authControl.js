// importing requred liberaries
require("dotenv").config();

const jwt = require("jsonwebtoken");

// requiring user model for getting data or posting data
const User = require("../models/userModels");

// newToken function to make jwt token of user
// I hided JWT key for my project
// If you are here to try application you can add you own jwt key for local server

const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT__KEY}`);
};

// register function add user detail in database and user can use username and password for further purpose.
const register = async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username })
      .lean()
      .exec();

    if (user) return res.status(400).send({ error: true, token: "" });

    user = await User.create(req.body);

    const token = newToken(user);

    console.log(`=>> ${req.body.name} is registered. token: ${token}`);

    res.status(201).send({ error: false, token });
  } catch (error) {
    console.log("=>> Registration ERROR", error);
    res.status(502).send({ error: true, token: "" });
  }
};

// login function for user login. User have to use only username and password for login.
const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      console.log("Please check your username or password");
      return res.status(400).send({ error: true, token: "" });
    }

    let match = user.checkPassword(req.body.password);

    if (!match) {
      console.log("Please check your username or password");
      return res.status(400).send({ error: true, token: "" });
    }

    const token = newToken(user);

    console.log(`=>> ${user.name} is logged in`);

    res.status(200).send({ error: false, token });
  } catch (error) {
    console.log("=>> Login ERROR", error);
    res.status(502).send({ error: true, token: "" });
  }
};

// exporting register and login function
module.exports = { register, login };
