import React, { useState} from 'react'

function EventRegistration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (event) => {
      event.preventDefault()

      if (!name ||!email ||!phoneNumber ||!message) {
        setErrorMessage('Please fill out all fields.')
        return
      }

      // Simulate form submission
      setTimeout(() => {
        setName('')
        setEmail('')
        setPhoneNumber('')
        setMessage('')
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
                <label htmlFor='message'>Message:</label>
                <textarea id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
        </form>
    </div>
  )
}

export default EventRegistration