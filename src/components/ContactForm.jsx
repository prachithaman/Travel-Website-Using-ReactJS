import './ContactForm.css'

import React from 'react'

const ContactForm = () => {
  return (
    <div className="form-container">
        <h1>Send a message to Us!</h1>
        <form>
            <input type="text" placeholder='Name' />
            <input type="Email" placeholder='Email' />
            <input type="number" placeholder='Phone Number' />
            <textarea placeholder='Message' rows="10"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm