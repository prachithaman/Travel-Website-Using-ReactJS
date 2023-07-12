import './Destination.css'
import React from 'react'
import { Component } from 'react'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"


const DestinationData = (props) => {
  return (
    <div>
        <div className="first-des">
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>

            <div className='image'>
                <img src={props.img1} alt="img" />
                <img src={props.img2} alt="img" />

            </div>
        </div>
    </div>
  )
}

export default DestinationData