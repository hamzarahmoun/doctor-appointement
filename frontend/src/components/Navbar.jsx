import React from 'react'
import logo from "../assets/assets_frontend/logo.svg";
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
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