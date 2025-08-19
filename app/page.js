import React from 'react'

import Hero from '@/components/Hero.jsx';
import Story from '@/components/Story';
import PastEvents from '@/components/PastEvents.jsx';
import Gallery from '@/components/Gallery.jsx';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import localfont from 'next/font/local';


const kosthipathor = localfont({
  src: "../app/fonts/koshtipathor_unicode.ttf",
  weight: "400",
  variable: "--font-koshtipathor",
})

function page() {
  return (
    <div className={` pb-10 overflow-x-hidden`}>
      <Image src={assets.side_banner} alt='side-banner' className='fixed top-0 right-0 h-30 w-30 md:w-40 md:h-40 lg:w-50 lg:h-50 z-10' />
      <Image src={assets.side_banner} alt='side-banner' className='fixed top-0 left-0 h-30 w-30 md:w-40 md:h-40 lg:w-50 lg:h-50 z-10 rotate-[270deg]' />
      <Hero />
      
      <Story />
      <PastEvents />
      <Gallery />
      
      <div className='w-screen flex felx-row justify-center items-center'>
        <div className='flex flex-col lg:flex-row justify-between items-center p-4 max-w-[60%] gap-5 lg:gap-20'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className={`${kosthipathor.className} text-xl`}>বাংলাদেশ কৃষি বিশ্বিদ্যালয়</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

            <p className={`${kosthipathor.className} text-2xl mb-2`}>example@domain.com</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <p className={`${kosthipathor.className} text-xl`}>+880123456789</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page