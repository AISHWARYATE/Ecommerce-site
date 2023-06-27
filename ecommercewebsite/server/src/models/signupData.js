const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aiswaryate704:aiswaryate704@cluster0.higp5vj.mongodb.net/ecommerce_db?retryWrites=true&w=majority')
const Schema = mongoose.Schema

const signupSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    phoneno:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    status:{type:String,required:true},


}) 

const signupModel=mongoose.model('signup_tb',signupSchema)
module.exports=signupModel