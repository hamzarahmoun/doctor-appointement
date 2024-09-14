import React from 'react'
import logo from "../assets/assets_frontend/logo.svg";
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img src={logo} alt="logo" />
        <ul>
            <NavLink>
                <li>Home</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>CONTACT</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar