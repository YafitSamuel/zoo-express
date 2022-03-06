const route= require ('express').Router()
const {register,login}=require('../controllers/user-controller')

route.post('/register',register)
route.post('/login',login)

module.exports=route