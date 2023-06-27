import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Grosseryitems.css';
export default function Grosseryitems() {
  
   const [product,setproduct] = useState([])
   useEffect(()=>{
      axios.get(`http://localhost:2000/product/check-categoery/grossery`).then((response)=>{
        const data=response.data.data
        console.log("data---",data);
        console.log(response.data.data);
        setproduct(response.data.data)
      }).catch((error)=>{
        console.log(error);
      })
    },[])

    const deleteuser=(id)=>{
      axios.get(`http://localhost:2000/product/product-delete/${id}`).then((response)=>{
           window.location.reload()
           })
    }

  return (
    <>
    <h1 id="grossery">Grossery</h1>
    {product.map((data)=>(
     <div class="fashion_section" style={{display:"inline-flex"}} >
    <div id="electronic_main_slider" class="carousel slide" data-ride="carousel">
       <div class="carousel-inner">
          <div class="carousel-item active">
             <div class="container">
                <div class="fashion_section_2">
                   <div class="row">
                      <div class="col-lg-4 col-sm-4">
                         <div class="box_main">
                            <h4 class="shirt_text">{data.pname}</h4>
                            <p class="price_text">Start Price {data.price}  <span style={{color: "#262626"}}>$ 100</span></p>
                            <div class="electronic_img"><img src={`upload/${data.pimage}`} height="250px" width="250px"/></div>
                            <div class="btn_main">
                               <div class="buy_bt"><a href="#">Buy Now</a></div>
                               <div class="seemore_bt"><a href="#">See More</a></div>
                               <button type="button" onClick={()=>{deleteuser(data._id)}} class="btn btn-danger">Delete</button>
                            </div>
                         </div>
                      </div>
                      {/* <div class="col-lg-4 col-sm-4">
                         <div class="box_main">
                            <h4 class="shirt_text">RICE</h4>
                            <p class="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                            <div class="electronic_img"><img src="/assets/rice.jpg" /></div>
                            <div class="btn_main">
                               <div class="buy_bt"><a href="#">Buy Now</a></div>
                               <div class="seemore_bt"><a href="#">See More</a></div>
                            </div>
                         </div>
                      </div> */}
                      {/* <div class="col-lg-4 col-sm-4">
                         <div class="box_main">
                            <h4 class="shirt_text">VEGETABLES</h4>
                            <p class="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                            <div class="electronic_img"><img src="/assets/vegitables.jpg" height="250px" width="250px"/></div>
                            <div class="btn_main">
                               <div class="buy_bt"><a href="#">Buy Now</a></div>
                               <div class="seemore_bt"><a href="#">See More</a></div>
                            </div>
                         </div>
                      </div> */}
                   </div>
                </div>
             </div>
          </div>
          </div>
          </div>
         </div>
      )
      )}
  
    </>
  )
}

