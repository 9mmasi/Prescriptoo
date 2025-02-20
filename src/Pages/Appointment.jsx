import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import {assets} from '../assets/assets/assets_frontend/assets'



const Appointment = () => {
  const[docInfo,setDocInfo]=useState(null)
  const{doctors,currencySymbol}=useContext(AppContext)
  const{docId}=useParams()
  const displayDocInfo=async()=>{
    const docInfo=doctors.find(doc=>
      doc._id===docId
    )
    setDocInfo(docInfo)
    console.log(docInfo)


  }

  useEffect(()=>{
    displayDocInfo()
  },[doctors,docId])
  return docInfo &&(
    <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary rounded-lg w-full sm:max-w-72" src={docInfo.image} alt="" />
          </div>
          <div className="flex-1 border border-gray-400 p-8 rounded-lg py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex itens-center text-gray-900 font-medium text-2xl gap-2 ">{docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" /></p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{docInfo.degree}-{docInfo.speciality}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>
            <div>
            <p className="flex items-center font-medium text-gray-900 gap-1 mt-3">About <img src={assets.info_icon} alt="" /></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <p className="text-gray-500 mt-4 font-medium">
            Appointment fee:<span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>
          </div>
         
        </div>
    </div>
  )
}

export default Appointment