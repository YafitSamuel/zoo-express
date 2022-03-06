const mongoose = require("mongoose");
const string_connection =process.env.connection_string
mongoose.connect(string_connection,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("the connection is up "))
.catch((err) => console.log("not connect"));

module.exports=mongoose.connection;

