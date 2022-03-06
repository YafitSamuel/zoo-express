
require('dotenv').config();
require('./DB/db');
const express=require('express')
const app = express()
const cors=require('cors') 
const passport = require("passport");
require("./config/passport")(passport);
const userRouter = require("./routes/user-route");
app.use("/users", userRouter);
const AnimalRouter=require('./routes/animals.route')
const employeeRouter=require('./routes/employee-route')
app.use(cors())
app.use(express.json())
app.use(passport.initialize()); //Initialize the passport function on the server
app.use('/animals',passport.authenticate("jwt", { session: false }),AnimalRouter)
app.use("/employee", passport.authenticate("jwt", { session: false }), employeeRouter);
// app.use('/employee',employeeRouter)
app.get('/',(req,res)=>{res.send('connection up ')})

app.listen(process.env.PORT )








