import React from 'react'
import './Smallpart.css';
export default function Smallpart() {
  return (
    <>
       <div class="container-fluid" id="small">
    <div class="row">
      <div class="col-md-3">
        <div class="d-flex align-items-center" style={{border:'1px solid'}}>
          <h1> <i class="fa-solid fa-check"></i></h1>
           <h5>QUALITY PRODUCTS</h5>
        </div>
      </div>
      <div class="col-md-3">
        <div class="d-flex align-items-center" style={{border:'1px solid'}}>
          <h1><i class="fa-sharp fa-solid fa-truck"></i></h1>
          <h5>FREE SHIPPING</h5>
       </div>
    </div>
      <div class="col-md-3">
        <div class="d-flex align-items-center" style={{border:'1px solid'}}>
          <h1 class="fas fa-exchange"></h1>
          <h5>14-DAY RETURN</h5>
        </div>
      </div>
      <div class="col-md-3">
        <div class="d-flex align-items-center" style={{border:'1px solid'}}>
          <h1><i class="fa-sharp fa-solid fa-phone-volume"></i></h1>
          <h5>24/7 SUPPORT</h5>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
