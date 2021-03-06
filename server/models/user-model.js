const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password:{ type: String, require: true },
    lastLogin: { type: Date, default: Date.now },
    IsLogin: { type: Boolean, default: false },
    IsAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
module.exports=mongoose.model('User',User)