import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const MyAppointement = () => {
  const { doctors } = useContext(AppContext)
  return (
    <div>
      <p>My Appointement</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.image} alt="" />

            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p><span>Date & Time</span> 25, July, 2024 | 8:30PM </p>
            </div>
            <div></div>
            <div>
              <button>Pay Online</button>
              <button>Cancel Appointement</button>

            </div>
          </div>

        ))}

      </div>
    </div>
  )
}

export default MyAppointement