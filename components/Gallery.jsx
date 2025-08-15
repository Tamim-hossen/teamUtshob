import React from 'react'
import localfont from 'next/font/local';
import { assets } from '@/assets/assets';
import Image from 'next/image';


const kosthipathor = localfont({
  src: "../app/fonts/koshtipathor_unicode.ttf",
  weight: "400",
  variable: "--font-koshtipathor",
});

function Story() {
    const numbers = 48;
    const images = Array.from({ length: numbers }, (_, index) => ({
        src: assets[`image_${index + 1}`],
        alt: `Gallery Image ${index + 1}`,
    }));
  return (
    <div className='max-w-[100vw] flex flex-col justify-center items-center p-4'>
        <div className='max-w-[100vw] flex flex-col justify-center items-center'>
            <div className='w-[90%] flex flex-col justify-center items-center '>
                <h1 className={`${kosthipathor.className} text-5xl pt-20`}>স্থিরচিত্র</h1>
                <div className='w-[80vw] grid grid-cols-2 lg:grid-cols-4 justify-center items-center mt-10 '>
                    {images.map((image, index) => (
                        <div key={index} className='m-2'>
                            <Image src={image.src} alt={`${image.alt}`} className='w-[250px]' />
                        </div>))}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Story