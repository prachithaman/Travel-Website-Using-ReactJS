import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'


const Home = () => {
  return (
    
    <>
        <Navbar/>
        <Hero cName="hero" heroImg="https://www.pixelstalk.net/wp-content/uploads/2016/04/Mountain-wallpaper-HD-free-download.jpg" title="Your Journey, Your Story" text="Choose your favourite destination" buttonText="Travel Plan" url="/" btnClass='show'/>
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home