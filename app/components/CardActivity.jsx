import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';

const CardActivity = ({title, date, place, link, description, time, room}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
        <figure className='border aspect-[4/3]'>
            <img
                src="./barcode.svg"
                alt="Shoes" 
                className='w-full'
            />
        </figure>
        <div className="card-body p-8">
            <h2 className="card-title text-2xl">{title}</h2>
            <div className='my-4'>
              <p className='font-semibold'>{date}</p>
              <p className='font-semibold'>{place}</p>
            </div>
            <Link 
              href={{
                pathname: link,
                query: {
                    title, 
                    date, 
                    place, 
                    description, 
                    time, 
                    room
                }
              }}
              className='btn w-32 flex btn-red items-center justify-center bg-red-700 hover:bg-red-600 text-white'
              >
                More Info <FaLongArrowAltRight color='white'/>
            </Link>
        </div>
    </div>
  )
}

export default CardActivity
