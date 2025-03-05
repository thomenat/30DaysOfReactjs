import React, { useState} from 'react'
import './EventRegistration.css'; 

function EventRegistration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [ticketType, setTicketType] = useState('')

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidPhoneNumber = (phoneNumber) => /^\d{9,}$/.test(phoneNumber); // At least 9 digits


    const handleSubmit = (event) => {
      event.preventDefault()

      if (!name ||!email ||!phoneNumber || !ticketType) {
        setErrorMessage('Please fill out all fields.')
        return
      }

      if (name.length == 0)  {
          setErrorMessage('Please enter a name.')
          return
        }

      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.')
        return
      }

      if (!isValidPhoneNumber(phoneNumber)) {
        setErrorMessage('Please enter a valid phone number.')
        return
      }

      if (!ticketType) {
        setErrorMessage('Please select a ticket type.')
        return
      }

      setErrorMessage('') // Clear any existing errors

      // Simulate form submission
      setTimeout(() => {
        setName('')
        setEmail('')
        setPhoneNumber('')
        setErrorMessage('')
        alert('Form submitted successfully!')
      }, 1000)
    }



  return (
    <div className='container'>
        <h1>Event Registration</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='phoneNumber'>Phone Number:</label>
                <input type='tel' id='phoneNumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div>
            <label htmlFor="ticketType">Ticket Type:</label>
            <select id="ticketType" name="ticketType" value={ticketType} onChange={(e) => setTicketType(e.target.value)} required>
            <option value="" disabled>Select a ticket type</option>
            <option value="free">Free</option>
            <option value="vip">VIP</option>
            <option value="early-bird">Early Bird</option>
            </select>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <button type='submit' id='submit'>Submit</button>
        </form>
    </div>
  )
}

export default EventRegistration