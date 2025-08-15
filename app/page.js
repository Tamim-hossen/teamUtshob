import React from 'react'

import Hero from '@/components/Hero.jsx';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery.jsx';
function page() {
  return (
    <div className={` pb-20 overflow-x-hidden`}>
      <Hero />
      <Story />
      <Gallery />
    </div>
  )
}

export default page