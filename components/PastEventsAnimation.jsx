'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { assets } from '@/assets/assets'
import Image from 'next/image'


function PastEventsAnimation() {

      const [isVisible, setIsVisible] = useState(false);
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              setIsVisible(true); 
            }
            else {
              setIsVisible(false); 
            }
          },
          { threshold: 0.05 } 
        );
    
        const element = document.getElementById('scroll-to-appear');
        if (element) observer.observe(element);
    
        return () => {
          if (element) observer.unobserve(element);
        };
      }, [isVisible]);


  return (
    <div>
      <Image id="scroll-to-appear2" src={assets.hero_poster_mobile} alt='hero-section' className={` md:hidden`}/>
      <Image id="scroll-to-appear3" src={assets.hero_poster_tab} alt='hero-section' className={`hidden md:block lg:hidden`}/>
      <Image id="scroll-to-appear" src={assets.hero_poster_3} alt='hero-section' className={`${isVisible ? 'animate-slide-up' :'opaciy-0'} hidden lg:block`}/>
      
    </div>
  )
}

export default PastEventsAnimation