import group from '../assets/assets/assets_frontend/group_profiles.png'
import arrow from '../assets/assets/assets_frontend/arrow_icon.svg'
import header from '../assets/assets/assets_frontend/header_img.png'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br className='hidden sm:block'/> With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light '>
        <img className='w-28' src={group} alt="" />
        <p>Simply browse through our extensive list of trusted doctors,<br/>schedule your appointment hassle-free</p>
      </div>
      <a className='flex items-center gap-2 bg-white text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 rounded-full py-3 px-8' href="#speciality">
        Book appointment <img className='w-3' src={arrow} alt="" />
      </a>
      </div>

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={header} alt="" />
      </div>
      
    </div>
  )
}

export default Header