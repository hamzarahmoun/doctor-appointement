import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    } 

  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p>Browse throught the doctore specialicity</p>
      <div>
        <div>
          <p>General physicien</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
          {
            filterDoc.map((items, index) => (
              <div onClick={() => navigate(`/appontement/${items._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-blue-50' src={items.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{items.name}</p>
                  <p className='text-gray-600 text-sm'>{items.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors