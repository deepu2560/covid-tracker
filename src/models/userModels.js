// importin requried liberaries
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// user schema for posting data in this json format only
const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    username: { type: String, require: true },
  },
  {
    // version key not required and timestamp required to know when user registered
    versionKey: false,
    timestamps: true,
  },
);

// this is for hiding password and storing a encrypted password in database for privacy purpose
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;

  return next();
});

// this for checking password while login
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// exporting user model
module.exports = mongoose.model("user", userSchema);
