import React from 'react'

const EditProfile = () => {
  return (
    <div className='EditProfile-container flex'> 
    <h1>Edit Profile</h1>
    <input 
    type='text' 
    name='name'
    placeholder='Name'
    required />

    <input 
    type='email'
    name='email'
    placeholder='Email'
    required/>

    <textarea 
    type='text'
    name='bio'
    placeholder='Short bio'
    />

    <select 
    name='theme'
    required></select>

    <input 
    type='file' 
    name='avatar'
    accept='image/*'
    />
    

    <button type='submit'>Save Changes</button>






    </div>
  )
}

export default EditProfile