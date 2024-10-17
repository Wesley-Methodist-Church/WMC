// import modules
import React from 'react'

// vision and mission component
const VisionMission = () => {
  return (
    <div className='flex flex-col gap-12 items-center justify-center bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-12 text-white'>
      <div className='flex flex-col justify-center items-center md:mb-4'>
        <h2 className='text-3xl mb-8 font-bold'>Our Vision</h2>
        <p>To be a Growind Church</p>
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <h2 className='text-3xl font-bold mb-8'>Our Mission</h2>
        <ul className='flex w-full md:flex-row flex-col gap-2 md:gap-0'>
          <li className='flex-1 text-center'>To Grow Disciple-makers</li>
          <li className='flex-1 text-center'>To Grow Into Deeper Relationship With God</li>
          <li className='flex-1 text-center'>To Grow By Serving God And Others</li>
        </ul>
      </div>
    </div>
  )
}

export default VisionMission
