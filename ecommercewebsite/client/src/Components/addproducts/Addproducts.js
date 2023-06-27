import React, { useState } from 'react'
import './addproducts.css';
import Mainnavbar from '../mainnav/Mainnavbar';
import axios from "axios"
export default function Addproducts() {

  const [products,setproducts] = useState({
    categoery:"",
    pimage:"",
    pname:"",
    price:""
  })
  const [file,setFile] =useState("")
  console.log(file)

  const change = (e)=>{
    const {name,value} = e.target
    setproducts({...products,[name]:value})
  }
  
  const sub =(e)=>{
    e.preventDefault()
    console.log("state",products);

    if(file){
      const data=new FormData();
      const filename=file.name
      data.append("name",filename)
      data.append("file",file)
      console.log("filedata",data);
      axios.post(`http://localhost:2000/product/upload`,data).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    }
    axios.post(`http://localhost:2000/product/addproducts`,products).then((response)=>{
      console.log("response----",response);
      const data=response.products
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
    <Mainnavbar/>
    <center>
        <div class="box2">
     <form>
     <h1>ADD PRODUCTS</h1>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Categoery</label>
    <input type="text" class="form-control" name='categoery' onChange={change} id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">product name</label>
    <input type="text" class="form-control" name='pname' onChange={change} id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">product image</label>
    <input type="file" class="form-control" name='pimage'onChange={(e)=>{setFile(e.target.files[0]); console.log(e.target.files[0]); setproducts({...products,pimage:e.target.files[0].name})}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price $</label>
    <input type="text" class="form-control" name='price' onChange={change}  id="exampleInputPassword1"/>
    </div>
    <button type="submit" class="btn btn-primary" onClick={sub} >Submit</button>
</form> 
</div>
</center>
    </>
  )
}
