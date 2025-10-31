import { create } from "zustand";
import { assets } from "@/assets/assets";

export const useAppContextEN = create((set) => ({
    eventsen: [
        {
            id: "001",
            name: "Tea Festival (এক কাপ চা)",
            description: "Our journey began with a cup of tea. Centered around the warmth of conversations over tea, a unique gathering gave birth to our very first event.",
            picture: { src: assets.image_31, alt: "event-1" },
            date: '18th February 2020',
            time: '3:00 PM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "002",
            name: "Spring Festival (উৎসবে বসন্ত)",
            description: "To bid farewell to the dryness of winter and welcome the warmth of the sun, the colors of nature, and the vibrancy of life, Team Utsab organized the “Spring Festival” on March 11, 2022. On that day, festival-loving youths of BAU welcomed spring in colorful attire. Local bands also enchanted the crowd with their mesmerizing tunes, making the day even more joyous and festive.",
            picture: { src: assets.image_44, alt: "event-3" },
            date: '11th March 2022',
            time: '3:00 PM',
            location: 'Bangladesh Agriculture University'
        },

        {
            id: "003",
            name: "Humayun Festival",
            description: "This was an online event we organized, aimed at expressing our love and respect for Humayun Ahmed. We hosted a competition where Humayun fans shared their emotions through creativity. Over 130,000 young participants from across the country joined in cosplay, photography, literature, and other categories, making the event truly unique.",
            picture: { src: assets.image_43, alt: "event-2" },
            date: '31st July 2022',
            time: '3:00 PM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "004",
            name: "Shrabon Festival (শ্রাবনের আমন্ত্রণে)",
            description: "To welcome the monsoon, we organized a vibrant celebration. The day was filled with musical performances, poetry recitations, creative rain-themed decorations, delicious food like khichuri and pakora, and much more. Female participants dressed in sky-blue sarees, reflecting the freshness of nature. At the same time, we paid tribute to our world poet Rabindranath Tagore, as the day also marked his death anniversary.",
            picture: { src: assets.image_49, alt: "event-4" },
            date: '11th March 2022',
            time: '9:00 AM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "005",
            name: "Harvest Festival (নবরূপে নবান্ন)",
            description: "“Harvest Festival” was our biggest event. Since our education is agriculture-based, we envisioned this Nabanna festival becoming a signature event of Bangladesh Agricultural University. Throughout the two-day celebration, countless visitors joined us in joyful festivities every moment.",
            picture: { src: assets.image_46, alt: "event-5" },
            date: '3rd December 2022',
            time: '3:00 PM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "006",
            name: "15th International Inter University Short Film Festival – Campus Screening",
            description: "This event was organized by the Dhaka University Film Society, and Team Utsab was honored to be the campus partner for that dreamlike moment.",
            picture: { src: assets.image_37, alt: "event-6" },
            date: '26th November 2023',
            time: '5:30 PM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "007",
            name: "Aro ek cup cha (আরো এক কাপ চা) ",
            description: "“Another Cup of Tea” is a cherished moment of our hearts. Like a hot sip of tea washing away life’s fatigue, this event was filled with laughter, stories, and the warmth of friendship. Various tea stalls and a delightful atmosphere made it a symbol of comfort, joy, and love for us.",
            picture: { src: assets.image_47, alt: "event-7" },
            date: '13th Decemebr 2023',
            time: '4:00 PM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "008",
            name: "Tidings of Sunshine (রোদ্দুর সমাচার)",
            description: "Golden hues of summer filled with laughter, love, and memories—songs of sunshine and unity that brought life into the heart of Team Utsab.",
            picture: { src: assets.image_50, alt: "event-8" },
            date: '11th March 2022',
            time: '9:00 AM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "009",
            name: "Harvest Festival 1431 (নবারুণে নবান্ন ১৪৩১)",
            description: `With "Nabarune Nabanna 1431", Team Utsab welcomed the new sprouts of the harvest in Bengal’s green fields. The entire day was vibrant with events such as the farmers’ rally, Nabanna through the camera lens, Nabanna on canvas, traditional food stalls, and many more festivities. In colors, scents, rhythms, and joy, the BAU (Bangladesh Agricultural University) campus experienced yet another unforgettable day.`,
            picture: { src: assets.image_51, alt: "event-9  " },
            date: '9th December 2024',
            time: '9:00 AM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "010",
            name: "Bangla New Year's Festival 1432 (শুভ নববর্ষ ১৪৩২)",
            description: `In the scorching heat of Bengal, the Bengali New Year began with the arrival of the *Kalbaishakhi* winds! To welcome the New Year, Team Utsav joined in on the *Boishakhi* stage. The celebration featured an array of traditional Bengali delights — *panta bhat*, various types of *bhorta*, and many other symbols of true Bengali culture.`,
            picture: { src: assets.image_52, alt: "event-10" },
            date: '9th December 2024',
            time: '9:00 AM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "011",
            name: "Utshob Screening (উৎসব স্ক্রীনিং)",
            description: `‘No entry without family’ — does that phrase ring a bell? Perhaps it reminds you of something special? The film that touched hearts all over Bangladesh — *Utsab*, a story woven with family ties, emotions, and the passage of time — is now coming to our campus!`,
            picture: { src: assets.image_53, alt: "event-11" },
            date: '9th December 2024',
            time: '9:00 AM',
            location: 'Bangladesh Agriculture University'
        },
        {
            id: "012",
            name: "16th International Inter-University Short Film Festival – Campus Screening.",
            description: `The love that the BAU family (BAU = Bangladesh Agricultural University) has for good cinema always excites us. To honor that passion, the screen is lighting up once again — and we’re back with a brand-new event! For the second time on the BAU campus, Team Utshob proudly presents the 16th International Inter-University Short Film Festival – Campus Screening.`,
            picture: { src: assets.image_54, alt: "event-12" },
            date: '9th December 2024',
            time: '9:00 AM',
            location: 'Bangladesh Agriculture University'
        }]
}))
