import React from 'react'
import './EditProfile.css'
const EditProfile = () => {
  return (
    <div className='container'> 
    <h1>Edit Profile</h1>
    <div className='name'>
    <input 
    type='text' 
    name='name'
    placeholder='Name'
    required />
    </div>

    <div className='email'>
    <input 
    type='email'
    name='email'
    placeholder='Email'
    required/>
    </div>

    <div className='bio'>
    <textarea 
    type='text'
    name='bio'
    placeholder='Short bio'
    />
    </div>

    <div className='theme'>
    <select 
    name='theme'
    required>
        <option value='light'>Light Theme</option>
        <option value='dark'>Dark Theme</option>
    </select>
    </div>

    <div className='avatar'>
    <input 
    type='file' 
    name='avatar'
    accept='image/*'
    />
    </div>
    

    <button type='submit'>Save Changes</button>
    </div>
  )
}

export default EditProfile