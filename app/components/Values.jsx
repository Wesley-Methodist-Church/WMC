// import modules
import React from 'react'
import Image from 'next/image'

// value component
const Values = () => {
  const section = (value, index) => {
    return (
      <div className='flex mb-16 w-full'>
        <div className='hidden md:flex gap-8'>
          {
            index % 2 === 0
            ?
            <>
              <div className='flex-1 flex flex-col justify-center' style={{ minHeight: '150px' }}> {/* Adjust minHeight as needed */}
                <h3 className='text-2xl md:text-3xl mb-4 font-semibold my-2'>{value.title}</h3>
                <p className='text-lg'>{value.description} <span className='w-96 h-4 inline-block'></span></p>
              </div>
              <div className='flex-1 relative aspect-[4/3]'>
                <Image 
                  src={`/${value.image}.png`} 
                  alt='adsa' 
                  className='h-full rounded'
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
            </>
            :
            <>
              <div className='flex-1 relative aspect-[4/3]'>
                <Image 
                  src={`/${value.image}.png`} 
                  alt='adsa' 
                  className='h-full rounded'
                  layout="fill" 
                  objectFit="cover"
                />
              </div>
              <div className='flex-1 flex flex-col justify-center' style={{ minHeight: '150px' }}> {/* Adjust minHeight as needed */}
                <h3 className='text-2xl md:text-3xl mb-4 font-semibold my-2'>{value.title}</h3>
                <p className='text-lg'>{value.description} <span className='w-96 h-4 inline-block'></span></p>
              </div>
            </>
          }
        </div>
        <div className='md:hidden flex flex-col'>
          <div className='w-full' style={{ minHeight: '150px' }}> {/* Adjust minHeight as needed */}
            <h3 className='text-2xl md:text-3xl mb-4 font-semibold my-2'>{value.title}</h3>
            <p className='text-lg'>{value.description} <span className='w-72 h-4 inline-block'></span></p>
          </div>
          <div className='relative aspect-[4/3]'>
            <Image 
              src={`/${value.image}.png`} 
              alt='adsa' 
              className='h-full rounded'
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
      title: "Core Value 1",
      description: "As inspired by Methodism movement of the founder John Wesley (1703-1791), Methodists  met regularly for bible study and prayer, to receive communion and do acts of charity to express their social holiness.",
      image: "value-1"
    },
    {
      title: "Core Value 2",
      description: "We believe Christ died for all of humanity, not just for a limited group, and thus everyone is entitled to God’s grace and protection; according to the measure of knowledge given them will be saved.",
      image: "value-2"
    },
    {
      title: "Core Value 3",
      description: 'The Holy Spirit assures a Christian of their salvation directly, through an inner "experience" (assurance of salvation).',
      image: "value-3"
    },
    {
      title: "Core Value 4",
      description: 'Christians in this life are capable of Christian perfection and are commanded by God to pursue it.',
      image: "value-4"
    }
  ]

  return (
    <div className='my-5 flex items-center flex-col px-10 md:px-52'>
      <h2 className='text-4xl md:text-5xl font-semibold mb-16 text-center'>Our Core Values</h2>
      {
        values.map((value, index) => (
          section(value, index)
        ))
      }
    </div>
  )
}

export default Values