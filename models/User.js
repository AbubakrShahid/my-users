const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("User", userSchema, "users");

console.log("User Model:", User.modelName);

module.exports = User;
