import React from 'react'
import './Mainnavbar.css';
export default function Mainnavbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg" id="nav" style={{backgroundColor:"#07798d"}}>
      <div class="container">
      <a class="navbar-brand" href="#">SHOPPING</a>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-houses-fill" viewBox="0 0 16 16">
        <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z"/>
        <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z"/>
      </svg>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Homepage">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              FASHION
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Men">MEN</a></li>
              <li><a class="dropdown-item" href="/Women">WOMEN</a></li>
              <li><a class="dropdown-item" href="/Baby">KIDS</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              BEAUTY
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Beauty">LIP STIK</a></li>
              <li><a class="dropdown-item" href="/Beautyitems">BEAUTY</a></li>
              <li><a class="dropdown-item" href="/Facemakeup">FACE MAkEUP</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             MORE
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Eletronics">ELTRONICS</a></li>
              <li><a class="dropdown-item" href="/Grossery">GROSSARY</a></li>
              <li><a class="dropdown-item" href="/Homeappliences">HOME APPLIALENCES</a></li>
              <li><a class="dropdown-item" href="/Book">BOOKS</a></li>
              <li><a class="dropdown-item" href="/Decorate">DECORATE ITEMS</a></li>
              <li><a class="dropdown-item" href="/Food">FOOD</a></li>
              <li><a class="dropdown-item" href="/Toys">TOYS</a></li>
              <li><a class="dropdown-item" href="/Sparetools">SPARE perspiciatis</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/viewcart">CART
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-secondary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </>
  )
}
