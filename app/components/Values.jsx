// import modules
import React from 'react'
import Image from 'next/image'

// value component
const Values = () => {
  const section = (value, index) => {
    return (
      <div className='flex mb-16'>
        <div className='hidden md:flex gap-8'>
          {
            index % 2 == 0
            &&
            <>
              <div className='flex-1 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold my-2'>{value.title}</h3>
                <p>{value.description}</p>
              </div>
              <div className='flex-1 relative aspect-[4/3]'>
                <Image 
                  src={`/${value.image}.png`} 
                  alt='adsa' 
                  className='h-full'
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
            </>
          }
          {
            index % 2 == 1
            &&
            <>
              <div className='flex-1 relative aspect-[4/3]'>
                <Image 
                  src={`/${value.image}.png`} 
                  alt='adsa' 
                  className='h-full'
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <div className='flex-1 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold my-2'>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </>
          }
        </div>
        <div className='md:hidden flex flex-col gap-8'>
          <div className='flex-1'>
            <h3 className='text-2xl font-semibold my-2'>{value.title}</h3>
            <p>{value.description}</p>
          </div>
          <div className='flex-1 relative aspect-[4/3]'>
            <Image 
              src={`/${value.image}.png`} 
              alt='adsa' 
              className='h-full'
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    )
  }

  const values = [
    {
      title: "title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia alias corrupti sint beatae quibusdam maiores neque hic dolorem quae. Voluptas recusandae, nobis, neque sunt ex corporis assumenda hic dolore impedit doloribus non. Eum reiciendis dolores alias sequi commodi dicta error blanditiis ipsa minima nesciunt? Necessitatibus eveniet laudantium sequi qui?",
      image: "image"
    },
    {
      title: "title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quia alias corrupti sint beatae quibusdam maiores neque hic dolorem quae. Voluptas recusandae, nobis, neque sunt ex corporis assumenda hic dolore impedit doloribus non. Eum reiciendis dolores alias sequi commodi dicta error blanditiis ipsa minima nesciunt? Necessitatibus eveniet laudantium sequi qui?",
      image: "image"
    }
  ]

  return (
    <div className='my-5 flex items-center flex-col px-10 md:px-52'>
      <h2 className='text-4xl font-semibold mb-16'>Our Core Values</h2>
      {
        values.map((value, index) => (
          section(value, index)
        ))
      }
    </div>
  )
}

export default Values