import React from 'react'

export default function Navbar() {
  return (
    <>
       <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    </div>
    <div class="col-md-4 ">
    <form action="" class=" ">
      <a type="button"href="/login" class="btn btn-secondary">LOGIN</a>
      <a type="button" href="/Signup" class="btn btn-secondary">Signup</a>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}
