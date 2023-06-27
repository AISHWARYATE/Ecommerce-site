import React, { useState } from 'react'
import './Signup.css';
import axios from 'axios'


export default function Signup() {
	const [details,setDetails] = useState({
		username:"",
		email:"",
		phoneno:"",
		password:""
	  })
	   
	  const change = (e)=>{
		const {name,value} = e.target
		setDetails({...details,[name]:value})
	  }
	  

	  const [formErrors,setFormErrors] =useState({})
  
      const [isSubmit,setisSubmit] =useState({})

	  const validate = (value) =>{
		var error ={};
		const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var phoneno = /^[6-9]\d{9}$/;
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
		console.log("error",error);
		if(!value.username){
			error.username ="enter user name"
		}
		if(!value.email){
		   error.email = "enter the email"
		}if(!value.phoneno){
			error.phoneno = "enter the phone  number"
		}
        if(!value.password){
		error.password = "enter the password"
	    }

		return error
	   }
	  

	  const sub =(e)=>{
		e.preventDefault()
		console.log("state",details);
		setFormErrors(validate(details))
        setisSubmit(true)
        if(Object.keys(formErrors).length ===0 && isSubmit){
		axios.post(`http://localhost:2000/signup/check-signup`,details).then((response)=>{
			console.log("response===>",response);
		}).catch((error)=>{
			console.log(error);
		  })
		}
	  }
  return (
    <>
      <div class="container text-center">
    <div class="row align-items-start">
    <div class="col-8" >
      <div class="box4"></div>
    </div>
    <div class="col-4">
    <div class="box5">
        <form>
        <div class="form-header">
		<h3 id="h3">Sign up</h3>
		<img src="/assets/sign-up.png" alt="" class="sign-up-icon"/>
		</div>
	    <div class="form-group">
		<label for="">Username:</label>
		<input type="text" class="form-control " id="fmcontrol" name='username' onChange={change}
		onClick={()=>{setFormErrors({...formErrors,username:""})}} 
		style={{borderColor:formErrors.username? "red":""}}/>
		</div>
		<div class="form-group">
		<label for="">E-mail:</label>
		<input type="text" class="form-control" name='email' onChange={change}
		onClick={()=>{setFormErrors({...formErrors,email:""})}} 
		style={{borderColor:formErrors.email? "red":""}}/>
		</div>
		<div class="form-group">
		<label for="">phonno:</label>
		<input type="text" class="form-control" name='phoneno' onChange={change} 
		onClick={()=>{setFormErrors({...formErrors,phoneno:""})}} 
		style={{borderColor:formErrors.phoneno? "red":""}}/>
		</div>
		<div class="form-group" >
		<label for="">Password:</label>
		<input type="password" class="form-control" name='password'onChange={change} 
		onClick={()=>{setFormErrors({...formErrors,password:""})}} 
		style={{borderColor:formErrors.password? "red":""}}/>
		</div>
		<button id="b" onClick={sub} >create my account</button>
		<div class="socials">
		<p id="p">Sign up with social platforms</p>
		<a href="" class="socials-icon">
		<i class="zmdi zmdi-facebook"></i>
		</a>
		<a href="" class="socials-icon">
		<i class="zmdi zmdi-instagram"></i>
		</a>
		<a href="" class="socials-icon">
		<i class="zmdi zmdi-twitter"></i>
		</a>
		<a href="" class="socials-icon">
		<i class="zmdi zmdi-tumblr"></i>
		</a>
		</div>
        </form>
    </div>
    </div>
  </div>
</div>
    </>
  )
}
