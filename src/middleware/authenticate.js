require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT__KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};

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
