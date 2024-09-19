import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctor = () => {
  return (
    <div>
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors</p>
        <div>
            {doctors.slice(0,10).map((items,index)=>(
                <div>
                    <img src={items.image} alt="" />
                    <div>
                        <div>
                            <p></p><p>Available</p>
                        </div>
                        <p>{items.name}</p>
                        <p>{items.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopDoctor