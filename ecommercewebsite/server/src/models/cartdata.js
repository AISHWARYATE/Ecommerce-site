const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aiswaryate704:aiswaryate704@cluster0.higp5vj.mongodb.net/ecommerce_db?retryWrites=true&w=majority')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    productid:{type:mongoose.Types.ObjectId,ref:'product_tb',required:true},
    quantity:{type:String,required:true},   
    userid:{type:mongoose.Types.ObjectId,ref:'signup_tb',required:true},
    status:{type:String,required:true},
}) 


const cartModel=mongoose.model('cart_tb',cartSchema)
module.exports=cartModel