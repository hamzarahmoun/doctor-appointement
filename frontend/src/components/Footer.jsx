import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*........ left side .......*/}

            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:2/3 text-gray-600 leading-6'>Simply browse through our extensive list of trusted doctors,
                shedulde your appoitement hassle-free Je tiens à exprimer toute ma gratitude pour les opportunités et les expériences enrichissantes
                que j'ai eues au sein de l'entreprise. Ces mois passés dans votre équipe ont été 
                une période précieuse d'apprentissage et de développement professionnel</p>

            </div>

             {/*........ center side .......*/}

            <div>
                <p className='text-xl font-medium mb-5 '>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
             {/*........ right side .......*/}

            <div>
                <p className='text-xl font-medium mb-5 ' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+212 645878596</li>
                    <li>hamza@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*.......copyright ..........*/}

        <div>
            <hr />
            <p className='py-5 text-sm text-center' >Copyright 2024@ Bugfa - All Right Reserved </p>

        </div>

    </div>
  )
}

export default Footer