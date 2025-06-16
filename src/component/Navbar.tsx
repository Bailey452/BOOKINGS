import React from 'react'
// import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>TravelEase</h1>

      <div className='navtext'>
        <p className='par'>Home</p>
        <p className='par'>My Bookings</p>
        <p className='par'>Support</p>
        <p className='par'>About Us</p>
      </div>

      <div className='navBtn'>
        <button className='btn btn1'>Sign In</button>
        <button className='btn'>Register</button>
      </div>
    </div>
  )
}

export default Navbar
