import React from 'react'

import Hero from '@/components/Hero.jsx';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery.jsx';
import Image from 'next/image';
import { assets } from '@/assets/assets';

function page() {
  return (
    <div className={` pb-20 overflow-x-hidden`}>
      <Image src={assets.side_banner} alt='side-banner' className='fixed top-0 right-0 w-50 h-50 z-10' />
      <Image src={assets.side_banner} alt='side-banner' className='fixed top-0 left-0 w-50 h-50 z-10 rotate-[270deg]' />
      <Hero />
      <Story />
      <Gallery />
    </div>
  )
}

export default page