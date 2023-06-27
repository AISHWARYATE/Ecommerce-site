import React from 'react'

export default function Mencomponents() {
  return (
    <>
     <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src='assets/banner-bg.png'  class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 class=" text-black">Get Start <br/>Your favriot shoping</h5>
            <div class="buynow_bt"><h5><a href="#">Buy Now</a></h5>
        </div>
      </div>       
  </div>
  </div>
  </div>
</>
  )
}
