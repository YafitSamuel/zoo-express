
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

app.listen(process.env.PORT || 8000)