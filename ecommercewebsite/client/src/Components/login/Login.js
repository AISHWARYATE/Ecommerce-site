import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [details,setDetails] = useState({
    username:"",
    password:""
  })
   
 const navigate= useNavigate()

  const change = (e)=>{
    const {name,value} = e.target
    setDetails({...details,[name]:value})
  }

  const [formErrors,setFormErrors] =useState({})
  
  const [isSubmit,setisSubmit] =useState({})

  const validate = (value) =>{
  var error ={}
  console.log("error",error);
  if(!value.username){
      error.username ="enter user name"
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
     console.log("errorlength",formErrors);
    axios.post(`http://localhost:2000/signup/check-login`,details).then((response)=>{
     console.log("response",response);
     if(response.data.success=== true){
      if(response.data.status==="0"){
        toast.warn('Waiting for admin approval', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else if(response.data.userRole==="0"){
        localStorage.setItem('token',response.data.token)
        navigate('/admin')
      }else if(response.data.userRole==="1"){
        localStorage.setItem('token',response.data.token)
        navigate('/Men')
      }
     }
    }).catch((error)=>{
      console.log(error)
    })
    }
  
  }



  return (
    <>
    <ToastContainer/>
          <center>
        <div class="box2">
     <form>
        <h1>Login</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">username</label>
    <input type="username" class="form-control" name='username' onChange={change} 
    onClick={()=>{setFormErrors({...formErrors,username:""})}} 
    style={{borderColor:formErrors.username? "red":""}}
    aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"name='password' onChange={change} 
    onClick={()=>{setFormErrors({...formErrors,password:""})}}
    style={{borderColor:formErrors.password? "red":""}}
    class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={sub} class="btn btn-primary">Submit</button>
  <div class="mb-3">
    <p>Don't have an account?</p><a href="/Signup">Signup Now</a>
  </div>
</form> 
</div>
</center>
    </>
  )
}
