'use client'
import React, { useEffect, useRef, useState } from 'react'
import localFont from 'next/font/local';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useLanguageStore } from '@/app/store/UseLanguageStore';

const kosthipathor = localFont({
  src: "../app/fonts/koshtipathor_unicode.ttf",
  weight: "400",
  variable: "--font-koshtipathor",
});

export default function Story() {
  const {selectedLanguage} = useLanguageStore()
  const numbers = 24;
  const images = Array.from({ length: numbers }, (_, index) => ({
    src: assets[`image_${index + 1}`],
    alt: `Gallery Image ${index + 1}`,
  }));

  const [visibleItems, setVisibleItems] = useState({});
  const containerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index')
          if (entry.isIntersecting && !visibleItems[index]) {
            const delay = Math.random() * 0.8 + 0.2 
            setTimeout(() => {
              setVisibleItems((prev) => ({ ...prev, [index]: true }))
            }, delay * 1000)
          }
        })
      },
      { threshold: 0.2 }
    )

    containerRefs.current.forEach((el) => el && observer.observe(el))

    return () => {
      containerRefs.current.forEach((el) => el && observer.unobserve(el))
    }
  }, [visibleItems])

  return (
    <div className='max-w-[100vw] flex flex-col justify-center items-center p-4'>
      <div className='max-w-[100vw] flex flex-col justify-center items-center'>
        <div className='w-[90%] flex flex-col justify-center items-center '>
          <h1 className={`${kosthipathor.className} text-5xl pt-20 ${selectedLanguage === 'Bangla' ? 'block':'hidden'}`}>স্থিরচিত্র</h1>
          <h1 className={`${kosthipathor.className} text-5xl pt-20 ${selectedLanguage === 'Bangla' ? 'hidden':'block'}`}>Gallery</h1>
          <div className='w-[80vw] lg:w-[55vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center mt-10'>
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => (containerRefs.current[index] = el)}
                data-index={index}
                className={`m-2 rounded-lg overflow-hidden transition-all duration-700 transform ${
                  visibleItems[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
