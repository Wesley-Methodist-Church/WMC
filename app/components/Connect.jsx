// import modules
import React from 'react'
import { 
  FaFacebookF, 
  FaYoutube, 
} from "react-icons/fa";

// contact components
const Connect = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/jumbotron.jpg')] bg-cover bg-center"></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="overflow-hidden lg:flex relative bg-white p-10 lg:p-16 lg:py-32 rounded-xl gap-4 w-3/4 md:w-2/3">
        <div className='flex-1'>
          <h3 className='text-2xl md:text-3xl font-bold mb-8 '>Connect With Us!</h3>
          <p className='text-sm'>Jl. Sultan Agung No. 9, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111, Indonesia</p>
          <div className='flex gap-2 mt-8 lg:mt-12 flex-col'>
            <div className='flex items-center gap-4'>
              <FaFacebookF className='mt-2'/>
              <a href="" className='underline text-sm'>wmc.wesley.9</a>
            </div>
            <div className='flex items-center gap-4'>
              <FaYoutube className='mt-2'/>
              <a href="" className='underline text-sm'>WesleyMethodistChurchMedan</a>
            </div>
          </div>
        </div>
        <iframe className='w-60 lg:flex-1 rounded mt-8 lg:mt-0 mb-4 lg:mb-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.998725276605!2d98.66335339999999!3d3.5877664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d6e29a6a63%3A0x86c3705d897cda8!2sWesley%20Methodist%20Church%20Medan!5e0!3m2!1sen!2sid!4v1729259639172!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className='absolute left-0 right-0 bottom-0 bg-red-600 h-4'></div>
      </div>
    </div>
  )
}

export default Connect
