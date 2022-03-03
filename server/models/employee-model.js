const mongoose = require("mongoose");
const schema = mongoose.Schema;

const employees = schema(
  {
    firstName:{ type:String, require},
    role:{ type:String, require},
    email:{ type:String, require},
    phone:{ type:Number, require}
},
{timestamps:true}
);
module.exports = mongoose.model("employee", employees);

