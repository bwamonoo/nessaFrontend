import React from 'react'
import './Account.css'

const Account = () => {
  return (
    <div className='second-profile-box'>
      <span className='special-profile-type-span added'>
        <span className='profile-type special-profile-type'>Profile</span>
        <span className='profile-type-edit'>Edit</span>
      </span>

      <span className='second-user-info added'>
        <span className='profile-type'>Firstname</span>
        <span className='users-information'>Dennis</span>
      </span>

      <span className='second-user-info added'>
        <span className='profile-type'>Last name</span>
        <span className='users-information'>Yeboah</span>
      </span>

      <span className='second-user-info added'>
        <span className='profile-type'>other name</span>
        <span className='users-information'>Dennis</span>
      </span>

      <span className='second-user-info added'>
        <span className='profile-type'>Email</span>
        <span className='users-information'>desmondadarkwah48@gmail.com</span>
      </span>

      <span className='second-user-info added'>
        <span className='profile-type'>Date of Birth</span>
        <span className='users-information'>{new Date().toLocaleDateString()}</span>
      </span>

      <span className='second-user-info added'>
        <span className='profile-type'>Phone number</span>
        <span className='users-information'>0240170728</span>
      </span>
    </div>
  )
}

export default Account