'use client'
import React, { use } from 'react'
import { useParams } from 'next/navigation'
import { useLanguageStore } from '@/app/store/UseLanguageStore'
import { useAppContextBN } from '@/context/AppcontextBN'
import { useAppContextEN } from '@/context/AppcontextEN'
import * as motion from "motion/react-client"
import localFont from 'next/font/local'
import Image from 'next/image'
import icon from '../../icon.png'
import Link from 'next/link'
const kosthipathor = localFont({
    src: "../../fonts/koshtipathor_unicode.ttf",
    weight: "400",
    variable: "--font-koshtipathor",
})
function page() {
    const id = useParams().id
    const { selectedLanguage } = useLanguageStore()
    const { eventsbn } = useAppContextBN()
    const { eventsen } = useAppContextEN()
    let events = []
    if (selectedLanguage === 'Bangla') {
        events = eventsbn
    }
    else {
        events = eventsen
    }
    const event = events.find(event => event.id === id)
    return (
        <div className='w-100vw flex flex-col justify-center items-center'>
            <Link href={'/'}>
                <Image src={icon} alt='icon' className='w-30 p-5' /></Link>

            <motion.div
                className="w-[70vw] flex flex-col justify-center items-center  py-5 gap-10"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.1, once: true }}
                variants={containerVariants}
            >
                <motion.div
                    className="w-[95%]  flex flex-col justify-center items-center  "
                    variants={textVariants}
                >
                    <h1 className={`${kosthipathor.className} text-3xl md:text-6xl   w-full text-center `}>
                        {event.name}
                    </h1>
                    <h3 className={`${kosthipathor.className} text-lg md:text-2xl py-5 w-full leading-relaxed text-center`}>
                        {event.description}
                    </h3>
                    <motion.div
                        className={`w-[90%]  flex justify-center items-end }`}
                        variants={imageVariants}
                    >
                        <Image
                            src={event.picture.src}
                            alt={event.picture.alt}
                            className="lg:w-80 lg:h-80 w-full h-full rounded-xl shadow-lg object-cover"
                        />
                    </motion.div>

                    <div className='flex flex-row justify-center items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                        </svg>

                        <h3 className={`${kosthipathor.className} text-lg md:text-2xl py-5 w-full leading-relaxed text-center`}>
                            {event.date}
                        </h3>

                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className={`${kosthipathor.className} text-lg md:text-2xl py-5 w-full leading-relaxed text-center`}>
                            {event.time}
                        </h3>

                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <h3 className={`${kosthipathor.className} text-lg md:text-2xl py-5 w-full leading-relaxed text-center`}>
                            {event.location}
                        </h3>

                    </div>


                </motion.div>


            </motion.div>
        </div>
    )
}
const containerVariants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", bounce: 0.3, duration: 1 },
    },
}

const imageVariants = {
    offscreen: { opacity: 0, scale: 0.8, rotate: -10 },
    onscreen: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
}

const textVariants = {
    offscreen: { opacity: 0, x: -50 },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: { type: "tween", duration: 0.6, ease: "easeOut" },
    },
}
export default page