import React from 'react'

const CardMember = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
        <figure>
            <img
                src="./barcode.svg"
                alt="Shoes" 
                className='w-full aspect-[3/4]'
            />
        </figure>
        <div className="card-body p-4">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
    </div>
  )
}

export default CardMember
