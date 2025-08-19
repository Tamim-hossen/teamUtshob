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
            <p className={`${kosthipathor.className} text-2xl text-center py-5`}>আমরা বাংলাদেশ কৃষি বিশ্ববিদ্যালয়, ময়মনসিংহের একটি সাংস্কৃতিক ক্লাব। আমাদের মূল উদ্দেশ্য হলো বিশ্ববিদ্যালয় ক্যাম্পাসে বাংলা সংস্কৃতিকে আপন করে ধরে রাখা এবং সেই আবহকে কাছ থেকে অনুভব করা।
               <br/>আমাদের কার্যক্রম মূলত একটি উৎসব ক্যালেন্ডারকে কেন্দ্র করে সাজানো হয় এবং সেভাবেই আমরা এগিয়ে চলি।
               <br/>যদিও আমরা একটি কারিগরি বিশ্ববিদ্যালয় থেকে এসেছি, তবুও আমাদের সংগঠন এখন পর্যন্ত বিশ্ববিদ্যালয় ক্যাম্পাসে এবং ময়মনসিংহ অঞ্চলে আন্তরিকভাবে গ্রহণযোগ্যতা পেয়েছে। ধীরে ধীরে আমরা জাতীয় পর্যায়েও কিছুটা পরিচিতি ও উৎসাহ অর্জন করতে পেরেছি, যা আমাদের জন্য অনুপ্রেরণার উৎস।
</p>
        </div>
        
    </div>
  )
}

export default Story