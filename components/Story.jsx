import React from 'react'
import localfont from 'next/font/local';


const kosthipathor = localfont({
  src: "../app/fonts/koshtipathor_unicode.ttf",
  weight: "400",
  variable: "--font-koshtipathor",
});

function Story() {
  return (
    <div className='max-w-[100vw] flex flex-col justify-center items-center p-4'>
        <div className='w-[100vh] flex flex-col justify-center items-center'>
            <div className='w-[80%] flex flex-col justify-center items-center'>
                <h1 className={`${kosthipathor.className} text-7xl pt-20`}>টিম উৎসব</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Story