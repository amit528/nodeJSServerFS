import React from 'react'
import "./Navbar.css"
// import { a } from 'react-router-dom'

function Navabar() {
  return (
    <div className='container1'>
      <h2><span style={{color:"rgb(255, 153, 0)",fontSize:"30px"}}>J</span>spiders</h2>
      <div className='links'>
        <h3><a href='/'>Home</a></h3>
        <h3><a href='/'>Contact</a></h3>
        <h3><a href='/'>About</a></h3>
        <button><a href='/'>Login</a></button>
        <button><a href='/'>SignUp</a></button>
      </div>
    </div>
  )
}

export default Navabar