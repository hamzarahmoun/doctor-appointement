import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 justify-center'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, nisl et cursus blandit, nunc metus scelerisque purus, eu tincidunt nisl nulla a arcu. Morbi ut consequat nunc. Nullam tincidunt elit nec est pellentesque, at tempus ligula bibendum. Sed et orci nec augue luctus consequat. Suspendisse potenti. Vivamus bibendum nunc id turpis fringilla, at dignissim justo elementum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, nisl et cursus blandit, nunc metus scelerisque purus, eu tincidunt nisl nulla a arcu. Morbi ut consequat nunc. Nullam tincidunt elit nec est pellentesque, at tempus ligula bibendum. Sed et orci nec augue luctus consequat. Suspendisse potenti. Vivamus bibendum nunc id turpis fringilla, at dignissim justo elementum.</p>
          
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, nisl et cursus blandit, nunc metus scelerisque purus, eu tincidunt nisl nulla a arcu. Morbi ut consequat nunc. Nullam tincidunt elit nec est pellentesque, at tempus ligula bibendum. Sed et orci nec augue luctus consequat. Suspendisse potenti. Vivamus bibendum nunc id turpis fringilla, at dignissim justo elementum.</p>
          
        </div>
      </div>

    </div>
  )
}

export default About