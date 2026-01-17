import React from 'react'
import Image from 'next/image';

function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out' >
        <div className='relative h-64 w-64 sm:h-80 sm:w-80'>
            <Image
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                className='rounded-xl'
                unoptimized
            />
        </div>
        <h3 className='text-xl sm:text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard
