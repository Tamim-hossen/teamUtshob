import { create } from "zustand";
import { assets } from "@/assets/assets";

export const useAppContextEN = create((set) => ({
    eventsen : [
            {
                id :"001",
                name: "Tea Festival (এক কাপ চা)",
                description: "Our journey began with a cup of tea. Centered around the warmth of conversations over tea, a unique gathering gave birth to our very first event.",
                picture: { src: assets.image_31, alt: "event-1" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"002",
                name: "Humayun Festival",
                description: "This was an online event we organized, aimed at expressing our love and respect for Humayun Ahmed. We hosted a competition where Humayun fans shared their emotions through creativity. Over 130,000 young participants from across the country joined in cosplay, photography, literature, and other categories, making the event truly unique.",
                picture: { src: assets.image_43, alt: "event-2" },
                                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"003",
                name: "Spring Festival (উৎসবে বসন্ত)",
                description: "To bid farewell to the dryness of winter and welcome the warmth of the sun, the colors of nature, and the vibrancy of life, Team Utsab organized the “Spring Festival” on March 11, 2022. On that day, festival-loving youths of BAU welcomed spring in colorful attire. Local bands also enchanted the crowd with their mesmerizing tunes, making the day even more joyous and festive.",
                picture: { src: assets.image_44, alt: "event-3" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"004",
                name: "Shrabon Festival (শ্রাবনের আমন্ত্রণে)",
                description: "To welcome the monsoon, we organized a vibrant celebration. The day was filled with musical performances, poetry recitations, creative rain-themed decorations, delicious food like khichuri and pakora, and much more. Female participants dressed in sky-blue sarees, reflecting the freshness of nature. At the same time, we paid tribute to our world poet Rabindranath Tagore, as the day also marked his death anniversary.",
                picture: { src: assets.image_49, alt: "event-4" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"005",
                name: "Harvest Festival (নবরূপে নবান্ন)",
                description: "“Harvest Festival” was our biggest event. Since our education is agriculture-based, we envisioned this Nabanna festival becoming a signature event of Bangladesh Agricultural University. Throughout the two-day celebration, countless visitors joined us in joyful festivities every moment.",
                picture: { src: assets.image_46, alt: "event-5" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"006",
                name: "International Inter University Short Film Festival – Campus Screening",
                description: "This event was organized by the Dhaka University Film Society, and Team Utsab was honored to be the campus partner for that dreamlike moment.",
                picture: { src: assets.image_37, alt: "event-6" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"007",
                name: "Aro ek cup cha (আরো এক কাপ চা) ",
                description: "“Another Cup of Tea” is a cherished moment of our hearts. Like a hot sip of tea washing away life’s fatigue, this event was filled with laughter, stories, and the warmth of friendship. Various tea stalls and a delightful atmosphere made it a symbol of comfort, joy, and love for us.",
                picture: { src: assets.image_47, alt: "event-7" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            },
            {
                id :"008",
                name: "Tidings of Sunshine (রোদ্দুর সমাচার)",
                description: "Golden hues of summer filled with laughter, love, and memories—songs of sunshine and unity that brought life into the heart of Team Utsab.",
                picture: { src: assets.image_50, alt: "event-8" },
                date:'11th March 2022',
                time: '9:00 AM',
                location: 'Bangladesh Agriculture University'
            }]
}))
