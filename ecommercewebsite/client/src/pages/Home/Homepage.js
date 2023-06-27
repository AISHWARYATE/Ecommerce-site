import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Mainnavbar from '../../Components/mainnav/Mainnavbar'
import Carousel from '../../Components/car/Carousel'
import Smallpart from '../../Components/smallpart/Smallpart'
import Footer from '../../Components/footer/Footer'
import Aboutus from '../../Components/aboutus/Aboutus'

export default function Homepage() {
  return (
    <>
      <Navbar/>
      <Mainnavbar/>
      <Carousel/>
      <Aboutus/>
      <Smallpart/>
      <Footer/>
      
    </>
  )
}
