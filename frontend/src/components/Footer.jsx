import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div>
        <div>
            {/*........ left side .......*/}

            <div>
                <img src={assets.logo} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,
                shedulde your appoitement hassle-free</p>

            </div>

             {/*........ center side .......*/}

            <div>
                <p>Company</p>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
             {/*........ right side .......*/}

            <div>
                <p>GET IN TOUCH</p>
                <ul>
                    <li>+212 645878596</li>
                    <li>hamza@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*.......copyright ..........*/}

        <div>
            <hr />
            <p>Copyright 2024@ Bugfa - All Right Reserved </p>

        </div>

    </div>
  )
}

export default Footer