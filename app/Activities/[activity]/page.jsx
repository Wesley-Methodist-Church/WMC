"use client"

import { useSearchParams } from 'next/navigation'
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import React from 'react'

const Page = () => {
  const searchParams = useSearchParams()

  const title = searchParams.get('title')
  const date = searchParams.get('date')
  const place = searchParams.get('place')
  const time = searchParams.get('time')
  const room = searchParams.get('room')
  const description = searchParams.get('description')

  return (
    <div className="mt-20">
      <div className="bg-[url('/activity.svg')] bg-cover h-72 md:h-96 lg:h-[420px] flex flex-col justify-end py-20 px-8 md:px-20">
        <h2 className="text-white text-4xl md:text-5xl font-bold">{title}</h2>
      </div>
      <div className="flex flex-col items-center p-8 py-20 md:p-32 gap-20">
        <p className='text-center'>{description}</p>
        <div className='flex gap-4 flex-col md:flex-row'>
          <div className='flex gap-2 items-center'>
            <FaRegCalendarAlt size={50}/>
            <div>
              <p className='font-semibold'>{date}</p>
              <p className='font-semibold'>{time}</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <SlLocationPin size={50}/>
            <div>
              <p className='font-semibold'>{place}</p>
              <p className='font-semibold'>{room}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
