
require('dotenv').config();
require('./DB/db');
const express=require('express')
const app = express()
const cors=require('cors') 

const AnimalRouter=require('./routes/animals.route')
const employeeRouter=require('./routes/employee-route')

app.use(cors())
app.use(express.json())
app.use('/animals',AnimalRouter)
app.use('/employee',employeeRouter)
app.get('/',(req,res)=>{res.send('connection up ')})

app.listen(process.env.PORT )

const passport = require("passport");
require("./config/passport")(passport);
app.use(passport.initialize()); //Initialize the passport function on the server
app.use("/employee", passport.authenticate("jwt", { session: false }), employeeRouter);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../client/build", "server.html"))
  );
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client/build", "server.html"))
  );
}


