import React, { useEffect, useState } from 'react'
import './Device.css';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Devices() {
   // const user_id = localStorage.getItem('user_id')
   // console.log("user",user_id);
   const {name}= useParams()
   const [product,setproduct] = useState([])
   const [cart,setcart] = useState({
      productid: ""    
   })
   const token=localStorage.getItem('token')
   useEffect(()=>{
      axios.get(`http://localhost:2000/product/check-categoery/eletronics`).then((response)=>{
        const data=response
        console.log("response",response);
        console.log("data---",data);
        console.log("data.data",response.data.data);
        setproduct(response.data.data)
      }).catch((error)=>{
        console.log(error);
      })
    },[])

      const deleteproduct=(id)=>{
      axios.get(`http://localhost:2000/product/product-delete/${id}`).then((response)=>{
           window.location.reload()
           })
      }
      
      const add =(id)=>{
         setcart((prevCart)=>{
            return{...prevCart,productid:id};
         });
         console.log(cart);
         axios.post(`http://localhost:2000/cart/add-to-cart`,cart,{
            headers:{
               "authorization":`Barer ${token}`
            }
         }).then((response)=>{
            console.log("response",response);
            const data=response
         }).catch((error)=>{
            console.log(error);
         })
      }
   
      

    
  return (
    <>
    <h1 id="eletronics">Eletroinics</h1>
    {product.map((data)=>(
      <div class="fashion_section" style={{display:"inline-flex"}}>
    <div id="electronic_main_slider" class="carousel slide" data-ride="carousel">
       <div class="carousel-inner">
          <div class="carousel-item active">
             <div class="container">
                {/* <h1 class="fashion_taital">{data.categoery}</h1> */}
                <div class="fashion_section_2">
                   <div class="row" >
                      <div class="col-lg-4 col-sm-4">
                         <div class="box_main">
                            <h4 class="shirt_text">{data.pname}</h4>
                            <p class="price_text">Start Price<span style={{color: '#262626'}}>{data.price}</span></p>
                            <div class="electronic_img"><img src={`upload/${data.pimage}`} height="250px" width="250px" /></div>
                            <div class="btn_main">
                               <div class="buy_bt"><a href="#">Buy Now</a></div>
                               <div class="seemore_bt"><a href="#">See More</a></div>
                               {/* <button type="button" onClick={()=>{deleteproduct(data._id)}} class="btn btn-danger">Delete</button><br></br> */}
                             <a type="button" href="/viewcart"  onClick={()=>{add(data._id)}} class="btn btn-danger">ADD TO CART</a>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       {/* <a class="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
       <i class="fa fa-angle-left"></i>
       </a>
       <a class="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
       <i class="fa fa-angle-right"></i>
       </a> */}
    </div>
 </div>
    )
    )}
    </>
  )
}
