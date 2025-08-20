'use client'
import React, { useEffect, useState, useRef } from 'react'
import localFont from 'next/font/local'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useLanguageStore } from '@/app/store/UseLanguageStore'

const kosthipathor = localFont({
  src: "../app/fonts/koshtipathor_unicode.ttf",
  weight: "400",
  variable: "--font-koshtipathor",
})

export default function Recognition() {
  const images = [assets.image_33, assets.image_34, assets.image_35, assets.image_36]
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState({})
  const containerRefs = useRef([])
  const {selectedLanguage} = useLanguageStore()

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) sectionObserver.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current)
    }
  }, [])

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
    return () => containerRefs.current.forEach((el) => el && observer.unobserve(el))
  }, [visibleItems])

  return (
    <div
      ref={sectionRef}
      className={`max-w-[100vw] flex flex-col justify-center items-center p-4 transition-all duration-700 transform ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className='w-[80%] flex flex-col justify-center items-center'>
          <h1 className={`${kosthipathor.className} text-5xl md:text-7xl pt-20 ${selectedLanguage === 'Bangla' ? 'block':'hidden'}`}>স্বীকৃতি</h1>
          <h1 className={`${kosthipathor.className} text-5xl md:text-7xl pt-20 ${selectedLanguage === 'Bangla' ? 'hidden':'block'}`}>Recognition</h1>
        </div>
        <p className={`${kosthipathor.className} text-xl md:text-2xl text-center py-5 w-[80%] ${selectedLanguage === 'Bangla' ? 'block':'hidden'}`}>
          আমাদের ছোট উদ্যোগগুলো ধীরে ধীরে স্থানীয় ও জাতীয় স্তরে স্বীকৃতি পেয়েছে।<br />
          প্রতিটি প্রশংসা আমাদের নতুন উদ্যম জাগায়, আর আনন্দ দেয় জানাতে যে আমাদের কাজ আরও অনেকের কাছে পৌঁছেছে।
        </p>
        <p className={`${kosthipathor.className} text-xl md:text-2xl text-center py-5 w-[80%] ${selectedLanguage === 'Bangla' ? 'hidden':'block'}`}>
          Our small initiatives have gradually gained recognition at both local and national levels.<br />
          Every compliment fuels our renewed energy and brings us joy, knowing that our work has reached even more people.
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-center mt-10'>
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (containerRefs.current[index] = el)}
            data-index={index}
            className={`m-2 rounded-lg overflow-hidden transition-all duration-700 transform ${
              visibleItems[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            } cursor-pointer hover:scale-105`}
          >
            <Image
              src={img}
              alt={`Recognition Image ${index + 1}`}
              width={250}
              height={250}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
