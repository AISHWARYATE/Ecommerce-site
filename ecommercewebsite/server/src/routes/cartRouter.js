const express=require('express')
const cartModel = require('../models/cartdata');
const checkAuth = require('../middleware/check-auth');
const cartRouter= express.Router();

cartRouter.post('/add-to-cart',checkAuth,async(req,res)=>{
 try {
    
    const{productid}=req.body
    const userid = req.userData.userId
    const cart= await cartModel.create({productid,quantity:1,userid,status:0})
    console.log(cart);
    if(cart){
        return res.status(200).json({
          success: true,
          error: false,
          message:" successfully added to cart "
        })
      }
 }  catch (error) {
      return res.status(400).json({
      success: false,
      error: true,
      message:"something went wrong" 
     })
    
 }
})


cartRouter.get('/view-cart',async(req,res)=>{
 try {
  const result=await cartModel.aggregate([
    {
      '$lookup': {
        'from': 'product_tbs', 
        'localField': 'productid', 
        'foreignField': '_id', 
        'as': 'products'
      }
    },
    
      {
        '$lookup': {
          'from': 'signup_tbs', 
          'localField': 'userid', 
          'foreignField': '_id', 
          'as': 'user'
        }
      },
      {
        "$unwind":"$products"
      },
      {
        "$unwind":"$user"
      },
    
    {
      "$group":{
        '_id':'$_id',
        'productid':{"$first":"$productid"},
        'quantity':{"$first":"$quantity"},
        'pname':{"$first":"$products.pname"},
        'price':{"$first":"$products.price"},
        'pimage':{"$first":"$products.pimage"},
        'username':{"$first":"$user.username"}
      }
    }
  ])
  console.log("res",result);
    if(result[0]!=undefined){
    return res.status(200).json({
        success: true,
        error: false,
        data: result
      })
    }
    console.log("data==",data);
 }catch (error) {
  return res.status(400).json({
    success: false,
    error: true,
    message:'somthing went wrong'
  })
 } 
})

cartRouter.get('/cart-product-delete/:id',async(req,res)=>{
  try{
    const id=req.params.id
    const data=await cartModel.deleteOne({_id:id})
    
         res.status(200).json({
          success:true,
          error:false,
          data:data,
      })  
     }catch(error){  
      console.log(error);   
     }
 })

module.exports = cartRouter