'use client'
import React from 'react'
import localfont from 'next/font/local';
import { useLanguageStore } from '@/app/store/UseLanguageStore';

const kosthipathor = localfont({
  src: "../app/fonts/koshtipathor_unicode.ttf",
  weight: "400",
  variable: "--font-koshtipathor",
});

function Story() {
  const { selectedLanguage } = useLanguageStore()

  return (
    <div className='max-w-[100vw] flex flex-col justify-center items-center p-4'>
      <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className='w-[80%] flex flex-col justify-center items-center'>
          <h1 className={`${kosthipathor.className} text-5xl md:text-7xl pt-20 ${selectedLanguage === 'Bangla' ? 'block' : 'hidden'}`}>টিম উৎসব</h1>
          <h1 className={`${kosthipathor.className} text-5xl md:text-7xl pt-20 ${selectedLanguage === 'Bangla' ? 'hidden' : 'block'}`}>Team Utshob</h1>
        </div>
        <p className={`${kosthipathor.className} text-xl md:text-2xl text-center py-5 w-[80%] ${selectedLanguage === 'Bangla' ? 'block' : 'hidden'}`}>আমরা বাংলাদেশ কৃষি বিশ্ববিদ্যালয়, ময়মনসিংহের একটি সাংস্কৃতিক ক্লাব। আমাদের মূল উদ্দেশ্য হলো বিশ্ববিদ্যালয় ক্যাম্পাসে বাংলা সংস্কৃতিকে আপন করে ধরে রাখা এবং সেই আবহকে কাছ থেকে অনুভব করা।
          <br />আমাদের কার্যক্রম মূলত একটি উৎসব ক্যালেন্ডারকে কেন্দ্র করে সাজানো হয় এবং সেভাবেই আমরা এগিয়ে চলি।
          <br />যদিও আমরা একটি কারিগরি বিশ্ববিদ্যালয় থেকে এসেছি, তবুও আমাদের সংগঠন এখন পর্যন্ত বিশ্ববিদ্যালয় ক্যাম্পাসে এবং ময়মনসিংহ অঞ্চলে আন্তরিকভাবে গ্রহণযোগ্যতা পেয়েছে। ধীরে ধীরে আমরা জাতীয় পর্যায়েও কিছুটা পরিচিতি ও উৎসাহ অর্জন করতে পেরেছি, যা আমাদের জন্য অনুপ্রেরণার উৎস।
        </p>
        <p className={`${kosthipathor.className} text-xl md:text-3xl text-center py-5 w-[80%] ${selectedLanguage === 'Bangla' ? 'hidden' : 'block'}`}>
          We are a cultural club of Bangladesh Agricultural University, Mymensingh. Our main objective is to preserve Bengali culture on the university campus and experience that atmosphere up close.
          <br />Our activities are mainly organized around a festival calendar and that's how we move forward.
          <br />Even though we come from a technical university, our organization has so far received sincere acceptance on university campuses and in the Mymensingh region. Gradually, we have been able to gain some recognition and enthusiasm at the national level, which is a source of inspiration for us.
        </p>
      </div>

    </div>
  )
}

export default Story