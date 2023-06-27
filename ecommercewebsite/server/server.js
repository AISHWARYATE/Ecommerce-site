const bodyParser=require('body-parser')
const express=require('express') 
var cors = require('cors');
const multer=require('multer')

const signupRouter = require('./src/routes/signupRouter')
const productRouter =require('./src/routes/productRoute');
const cartRouter = require('./src/routes/cartRouter');

const app=express()

app.use(cors())
app.use(bodyParser())
app.use(express.urlencoded({ extended: true}))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader( "Access-Controll-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authentication");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
});
app.use('/signup',signupRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)
app.listen(2000,()=>
{
  console.log("server starte at port http://localhost:2000");
})

