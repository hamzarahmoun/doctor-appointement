import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'

const Appointement = () => {
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)
  const [docInfo,setDocInfo]= useState(null)
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  return docInfo && (
    <div>
      {/*............Doctor Detail............*/}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>
        <div>
          {/*.............. Doc Info: name degree ..........*/}
          <p>
            {docInfo.name}
            <img src={assets.verified_icon} alt="" />
          </p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          {/*........... Doctor about ..............*/}
          <p>About <img src={assets.info_icon} alt="" /></p>
          <p>{docInfo.about}</p>
        </div>
      </div>

    </div>
  )
}

export default Appointement