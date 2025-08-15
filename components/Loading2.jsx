import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
function Loading2() {
  return (
    <div>
        <Image src={assets.icon} alt='Loading...' className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 infinite animate-ping w-20 h-20 ' />
    </div>
  )
}

export default Loading2