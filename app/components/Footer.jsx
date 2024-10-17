// import modules
import React from 'react'
import Image from 'next/image'

// import icons
import { 
  FaFacebookF, 
  FaYoutube, 
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// footer component
const Footer = () => {
  return (
    <div className='bg-zinc-900 mdh-56 flex flex-col gap-4 p-12 text-white'>
      <div className='flex md:flex-row flex-col gap-8'>
        <div className='flex-1'>
          <Image className='flex-1' src="./logo.svg" width={200} height={400}/>
        </div>
        <div className='flex-1 flex flex-col gap-2'>
          <p>+62 xxx xxxx xxxx</p>
          <p>Jl. Sultan Agung No.0, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111, Indonesia</p>
          <a href='asda'>wmc@mail.com</a>
        </div>
        <div className='flex-1 flex flex-row items-center gap-4 justify-end'>
          <a href='https://www.facebook.com/wmc.wesley.9' target='_blank' className='rounded-full bg-red-600 aspect-square h-10 flex items-center justify-center'>
            <FaFacebookF size={25}/>
          </a>
          <a href='https://www.youtube.com/@WesleyMethodistChurchMedan' target='_blank' className='rounded-full bg-red-600 aspect-square h-10 flex items-center justify-center'>
            <FaYoutube  size={25}/>
          </a>
          <a href='https://maps.app.goo.gl/MAy3g2VRtdThjYKM9' target='_blank' className='rounded-full bg-red-600 aspect-square h-10 flex items-center justify-center'>
            <FaLocationDot  size={25}/>
          </a>
        </div>
      </div>
      <div className='w-full flex justify-end'>
        <span className='text-xs mt-4'>&copy; Wesley Methodist Church Medan 2024</span>
      </div>
    </div>
  )
}

export default Footer
