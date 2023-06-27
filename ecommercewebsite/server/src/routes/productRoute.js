const express=require('express')
const productModel = require('../models/products')
const productRouter = express.Router();
const multer=require('multer')
 
const storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'../client/public/upload')
  },
  filename:function(req,file,cb){
    cb(null,req.body.name)
  }
})
const upload=multer({storage:storage})
productRouter.post('/upload',upload.single("file"),(req,res)=>{
  return res.json("file uploaded")
})
productRouter.post('/addproducts',async(req,res)=>{
    try {
        const{categoery,pimage,pname,price}=req.body
        console.log(req.body);
        const result = await productModel.create({categoery,pimage,pname,price}) // insert data to register table 
        console.log("result",result);
        if(result){
          return res.status(200).json({
            success: true,
            error: false,
            message:" successfully added products"
          })
        }
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message:"something went wrong" 
          })
        
    }
})
  
productRouter.get('/view-products',async(req,res)=>{
  try {
    const products =await productModel.find()
    res.status(200).json({
      success:true,
      error:false,
      details:products,
    })
  } catch (error) {
    console.log(error);  
  }
 })

productRouter.get('/check-categoery/:name',async(req,res)=>{
 try {
  const categoery=req.params.name
  const categoeryy=await productModel.find({categoery})
  res.status(200).json({
    success:true,
    error:false,
    data:categoeryy,
    message:"find categoery"
  })

 }catch (error) {
   console.log(error);  
 }
})

productRouter.get('/product-delete/:id',async(req,res)=>{
  try{
    const id=req.params.id
    const data=await productModel.deleteOne({_id:id})
    
         res.status(200).json({
          success:true,
          error:false,
          data:data,
      })  
     }catch(error){  
      console.log(error);   
     }
 })
 productRouter.post('/update/:id',async(req,res)=>{
  var Data={
    pimage :req.body.name,
    pname:req.body.pname,
    price:req.body.price
  }
  try{
    const id=req.params.id
    const productdata=await productModel.updateOne({_id:id},{$set:Data})
    
         res.status(200).json({
          success:true,
          error:false,
          data:productdata,
      })  
     }catch(error){  
      console.log(error);   
     }
 })


  

 
module.exports = productRouter