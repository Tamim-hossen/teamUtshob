'use client'
import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import * as motion from "motion/react-client"
import Link from 'next/link'
import { useAppContextBN } from '@/context/AppcontextBN'
import { useAppContextEN } from '@/context/AppcontextEN'
import { useLanguageStore } from '@/app/store/UseLanguageStore'

const kosthipathor = localFont({
    src: "../app/fonts/koshtipathor_unicode.ttf",
    weight: "400",
    variable: "--font-koshtipathor",
})

function PastEvents() {
  const {selectedLanguage} = useLanguageStore()
  const {eventsbn} = useAppContextBN()
  const {eventsen} = useAppContextEN()
  let events = []
  if (selectedLanguage === 'Bangla'){
    events = eventsbn
  }
  else {
    events = eventsen
  }


    return (
        <div className="max-w-[100vw] flex flex-col justify-center items-center p-4">
      <p className={`${kosthipathor.className} text-5xl ${selectedLanguage === 'Bangla' ? 'block' : 'hidden'}`}>আমাদের উৎসব</p>
      <p className={`${kosthipathor.className} text-5xl ${selectedLanguage === 'Bangla' ? 'hidden' : 'block'}`}>Past Events</p>
      <p className={`${kosthipathor.className} text-2xl py-5 underline text-center ${selectedLanguage === 'Bangla' ? 'block' : 'hidden'}`}>
        যেখানে গান, কবিতা আর রঙ মিলে তৈরি হয় আমাদের আপন পৃথিবী
      </p>
      <p className={`${kosthipathor.className} text-2xl py-5 underline text-center ${selectedLanguage === 'Bangla' ? 'hidden' : 'block'}`}>
        Where music, poetry, and colors come together to create our own world.
      </p>

      {events.map((event, index) => (
        <Link href={`/event/${event.id}`} className="w-full flex flex-col lg:flex-row justify-center items-center" key={index}>
        <motion.div
          className="w-[70vw] flex flex-col lg:flex-row justify-center items-center border-b border-gray-400 py-15 gap-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.2, once: false }}
          variants={containerVariants}
        >
          <motion.div
            className={`w-[90%] lg:w-[40%] flex justify-start items-start ${
              index % 2 === 0 ? "hidden" : "hidden lg:block"
            }`}
            variants={imageVariants}
          >
            <Image
              src={event.picture.src}
              alt={event.picture.alt}
              className="w-80 h-80 rounded-xl shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="w-[90%] lg:w-[40%] flex flex-col justify-center items-center lg:items-start "
            variants={textVariants}
          >
            <h1 className={`${kosthipathor.className} text-2xl  md:text-4xl w-full text-center lg:text-left`}>
              {event.name}
            </h1>
            <h3 className={`${kosthipathor.className} text-lg md:text-2xl pt-5 w-full leading-relaxed text-justify lg:text-left`}>
              {event.description}
            </h3>
          </motion.div>

          <motion.div
            className={`w-[90%] lg:w-[40%] flex justify-center items-end ${
              index % 2 === 0 ? "block" : "block lg:hidden"
            }`}
            variants={imageVariants}
          >
            <Image
              src={event.picture.src}
              alt={event.picture.alt}
              className="lg:w-80 lg:h-80 w-full h-full rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </motion.div></Link>
      ))}
    </div>
    )
}

const containerVariants = {
  offscreen: { opacity: 0, scale: 0.8  },
  onscreen: {
    opacity: 1,
    scale :1 ,
    transition: { type: "tween", duration: 0.5 },
  },
}

const imageVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    rotate: 0,
    transition: { type: "tween", duration: 0.5 },
  },
}

const textVariants = {
  offscreen: { opacity: 0},
  onscreen: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
}


export default PastEvents