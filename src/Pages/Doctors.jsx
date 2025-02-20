import { useContext, useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext"


const Doctors = () => {
  const{speciality}=useParams()
  const[filterDoc,setFilterDoc]=useState([])
  const navigate=useNavigate()
  const{doctors}=useContext(AppContext)
  const filterRule=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    filterRule()
  },[doctors,speciality])
  const uniqueSpecialities = ['All', ...new Set(doctors.map(doc => doc.speciality))];

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors speciality.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex-col gap-4 text-sm text-gray-600">
        {uniqueSpecialities.map((speciality, index) => (
  <p 
    key={index} 
    onClick={() => speciality === 'All' ? navigate(`/doctors`) : navigate(`/doctors/${speciality}`)} 
    className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
  >
    {speciality}
  </p>
))}
          
         
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-5 gap-4 pt-5 px-3 sm:px-0'>
            {
              filterDoc.map((item, index) => (
                <div onClick={()=>navigate(`/appointment/${item._id}`)}
                  className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                  key={index}
                >
                  <img className='bg-blue-50 w-full h-60 object-cover' src={item.image} alt='' />
                  <div className='p-4 text-center'>
                    <div className='flex items-center justify-center gap-2 text-sm text-green-500'>
                      <p className='w-2 h-2 rounded-full bg-green-500'></p> 
                      <p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
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