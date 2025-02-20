import { NavLink, useNavigate } from "react-router-dom"
import profile from "../assets/assets/assets_frontend/profile_pic.png"
import logo from "../assets/assets/assets_frontend/logo.svg"
import dropdown from "../assets/assets/assets_frontend/dropdown_icon.svg"
import { useState } from "react"


const NavBar = () => {
    const navigate=useNavigate()
    const [token,setToken]=useState(true)
    {/*const [showMenu,setShowMenu]=useState(false)*/}
  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b border-b-gray-400 ">
        <img onClick={()=>navigate(`/`)} className="w-44 cursor-pointer"  src={logo} alt="" />
        <ul className="hidden md:flex gap-5 items-start font-medium">
        <NavLink to='/'>
            <li className="py-1">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to='/doctors'>
            <li className="py-1">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to='/about'>
            <li className="py-1">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden "/>
            </NavLink>
            <NavLink to='/contact'>
            <li className="py-1">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden "/>
            </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {token?<div className="relative group cursor-pointer gap2 flex items-center" >
                <img className="w-8 rounded-full" src={profile} alt="" />
                <img className="w-2.5" src={dropdown} alt="" />
                <div className="absolute top-0 right-0 flex flex-col font-medium text-gray-600 z-20 gap-4 pt-14 text-base hidden group-hover:block">
                    <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                        <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                        <p onClick={()=>setToken(false)}  className="hover:text-black cursor-pointer">Logout</p>
                    </div>
                </div>
            </div>: <button className="bg-primary px-8 rounded-full font-light text-white py-3 hidden md:block">Create account</button>}
           
        </div>
        
    </div>
  )
}

export default NavBar