const mongoose = require("mongoose");
const schema = mongoose.Schema;

const animals = schema(
  {
    Name: { type: String, require: true },
    DateOfBirth: { type: Date, require: true },
    CageNumber: { type: Number, require: true },
    Type: { type: String, require: true },
    Gender: { type: String, require: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("animal", animals);

