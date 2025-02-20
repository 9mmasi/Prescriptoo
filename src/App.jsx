import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Doctors from "./Pages/Doctors"
import Login from "./Pages/Login"
import MyProfile from "./Pages/MyProfile"
import MyAppointments from "./Pages/MyAppointments"
import Appointment from "./Pages/Appointment"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/my-appointments" element={<MyAppointments/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App