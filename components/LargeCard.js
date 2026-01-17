import React from 'react'
import Image from 'next/image';

function LargeCard({img, title, description,buttonText}) {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className='relative h-96 min-w-[300px]' >
        <Image 
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className='rounded-2xl'
          unoptimized
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className='absolute inset-x-6 bottom-10 text-white sm:inset-auto sm:top-32 sm:left-12 sm:right-auto'>
        <h3 className='text-3xl sm:text-4xl mb-3 w-64'>{title}</h3>
        <p className='text-sm sm:text-base'>{description}</p>
        <button className="text-sm text-gray-900 bg-white px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </div>
  )
}

export default LargeCard
