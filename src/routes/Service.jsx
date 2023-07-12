import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from "../assets/1.jpg"
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <>
    <Navbar/>
        <Hero cName="hero-mid" heroImg={AboutImg} title="Services" btnClass='hide'/>
        <Trip/>
        <Footer/>
      
    </>
  )
}

export default Service