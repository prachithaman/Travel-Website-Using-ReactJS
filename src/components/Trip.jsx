import React from 'react'
import './Trip.css'
import TripData from './TripDta'
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destintions using google maps.</p>
        <div className="tripcard">
        <TripData image={Trip1} heading="Trip to France" text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. " />
 

        <TripData image={Trip2} heading="Trip to India" text="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area; the most populous country and the world's most populous democracy." />
     
        <TripData image={Trip3} heading="Trip to USA" text="The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC." />
       </div>
    </div>
  )
}

export default Trip