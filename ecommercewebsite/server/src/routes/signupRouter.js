const express=require('express')
const signupModel = require('../models/signupData')
const signupRouter = express.Router();
const bcrypt = require('bcrypt');
const  jwt = require('jsonwebtoken');


signupRouter.post('/check-signup',async(req,res)=>{
    try {
        const{username,email,phoneno,password}=req.body
        const hashpass = await bcrypt.hash(password,10);
        const result = await signupModel.create({username,email,phoneno,password:hashpass,role:1,status:0}) // insert data to register table 
        console.log(result);
        if(result){
          return res.status(200).json({
            success: true,
            error: false,
            data:result,
            message:"signup successfull"
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
//---------------Login---------------------------
signupRouter.post('/check-login',async(req,res)=>{
  try {
    const{username,password}=req.body
    const oldu=await signupModel.findOne({username})
    console.log(oldu);
    if(!oldu){
      return res.status(400).json({
             success:false,
             error:true,
             message:"this username not matching "
       })
     }
     console.log(oldu.password);
     const check =await  bcrypt.compare(password,oldu.password); // true or false
     if(!check){    
       return  res.status(400).json({
        success:false,
        error:true,
        message:"this password not matching"
        })
     }
       
      const token= jwt.sign(
        {userid:oldu._id,userRole:oldu.role},
        "abcde",
        {expiresIn:"1h"}
      )


       return res.status(200).json({
         success:true ,
         error: false,
         message:"  successfully logined",
         token:token,
         userRole:oldu.role,
         status:oldu.status,
         expiresIn:3600
       })
     
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message:"something went wrong" 
    })   
  }
})

 

module.exports= signupRouter

