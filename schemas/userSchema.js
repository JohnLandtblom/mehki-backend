const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: 5,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: ["Confirm your password"],
    select: false,
    validate: {
      validator: function (match) {
        return match === this.password;
      },
      message: "Passwords do not match.",
    },
  },
});

userSchema.methods.comparePassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
