// importing mongoose connect database and dotenv to use .env file
const mongoose = require("mongoose");

require("dotenv").config();

// main connect function which connect server to backend I hided database link because of privacy purpose.
// If you are here to try application you can add local database link instaead to proccess.env.URL
// For this project I used mongodb atlas for cloud database

const connect = () => {
  return mongoose.connect(`${process.env.URL}`);
};

// export connect function
module.exports = connect;
