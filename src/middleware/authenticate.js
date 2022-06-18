// importing required liberaries
require("dotenv").config();

const jwt = require("jsonwebtoken");

// verifyToken for verifing token exists for a user of not and how is that user to show data
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT__KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};

// main authorization function it checks for token properly and sends user data
module.exports = async (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(400).send({ message: "Token not provided or Invalid" });

  const token = req.headers.authorization;

  let user;

  try {
    user = await verifyToken(token);
  } catch (error) {
    console.log("Error:", error);
    res.send(400).send({ message: "Token not provided or Invalid" });
  }

  req.user = user.user;

  return next();
};
