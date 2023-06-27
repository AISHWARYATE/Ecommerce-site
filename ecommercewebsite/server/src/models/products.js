const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aiswaryate704:aiswaryate704@cluster0.higp5vj.mongodb.net/ecommerce_db?retryWrites=true&w=majority')
const Schema = mongoose.Schema

const productSchema = new Schema({
    categoery:{type:String,required:true},
    pimage:{type:String,required:true},      
    pname:{type:String,required:true},   
    price:{type:String,required:true},

}) 

const productMoldel=mongoose.model('product_tb',productSchema)
module.exports=productMoldel