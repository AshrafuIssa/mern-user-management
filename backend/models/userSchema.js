const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"name is required"],
    max: 200,
    min: 3

  },
  email: {
    type: String,
    required: [true,"email is required"]
  },
  password: {
    type: String,
    required: [true,"password is required"]
  }
},{timestamps:true})

const UserModel = mongoose.model("Users",UserSchema)

module.exports = {UserModel}