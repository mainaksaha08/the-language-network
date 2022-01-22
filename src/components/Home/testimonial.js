import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar";
import { EffectFade, Parallax } from "swiper/core";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, Pagination]);

function CardData() {
    const rtn = [
        {
            pic: "/images/testimonialPics/Testimonial_resize_Soham.jpg",
            desc: "Since the ‘Hallyu wave’ got me into K-dramas and K-pop, I decided to learn Hangul (Korean) as an extra language to my knowledge. The team appointed me a teacher and I started 1:1 classes. I am also thankful to Team Language Network for having a great management system.",
            name: "SOHAM KUMBHE",
            post: "Student",
        },
        {
            pic: "/images/testimonialPics/Testimonial_resize_Devanshi.jpg",
            desc: "I am having a great experience learning French at The Language Network. The teaching is very good. My teacher Siddhi is very good at French and she teaches us very well. In all, The Language Network is a good institute and would definitely continue learning.",
            name: "Devanshi Hemani",
            post: "Student",
        },
        {
            pic: "/images/testimonialPics/Testimonial_resize_Sonia.jpg",
            desc: "Initially, I was very nervous about how to go about learning a new language but Samihan made it extremely comfortable for all of us. He used unique and fun techniques to make sure we understand. I am so glad to have chosen TLN for this wonderful experience.",
            name: "Sonia Shah",
            post: "Head of Market Research and Analysis",
        },
        {
            pic: "/images/testimonialPics/Testimonial_resize_Rani.jpg",
            desc: "I had always wanted to restart my German language learning and what better place than TLN. Thanks to the entire team for being so cordial & giving sufficient flexibility for scheduling lectures. Special thanks to my language instructor Isha who has been so supportive throughout.",
            name: "Rani Vaidyanathan",
            post: "Finance Intern",
        },
        {
            pic: "/images/testimonialPics/Testimonial_resize_Rajasi.jpg",
            desc: "I chose Mandarin because it is the most difficult language in the world, but “The Language Network” made it seem easy. Vidhi is an amazing teacher and I’m prepared to go for HSK 2 with TLN.",
            name: "Rajasi Mhatre ",
            post: "Student at Ramnarain Ruia College ",
        },
        {
            pic: "/images/testimonialPics/WhatsApp-Image-2020-12-15-at-8.47.55-AM.jpeg",
            desc: "When it comes to learning a new language – The Language Network is the right place. I completed German A1 in 8 weeks. What they teach you will help you improve your language skills, not just during the course, but beyond. Kudos to the team!",
            name: "Sanath Salunkhe",
            post: "Automotive Engineer, Varroc Group ",
        }, 
        {
            pic: "/images/testimonialPics/Testimonial_resize_Abhilash.jpg",
            desc: "I’m so glad to have started my journey of learning Spanish with TLN. The team is doing a great job while keeping up with the quality of education they provide through their highly qualified trainers. Special credits to Cheryl Pais for being a fantastic trainer. Looking forward to learning more with TLN.",
            name: "Abhilash Sahare",
            post: "Student",
        }, 
        {
            pic: "/images/testimonialPics/Testimonial_resize_Aditi.jpg",
            desc: "Learning French from Prajakta Ma’am was a delight for me. I am really happy to complete both my levels at The Language Network. It was an amazing experience throughout. Thanks to Prajakta Ma’am for making it easy and simple. Thank you so much.",
            name: "ADITI DHAMNE",
            post: "Student",
        },
    ];
    return rtn;
}

export default () => {
    const cardData = CardData();
    return (
        <Swiper
        navigation = {true}
            infinite
            autoplay={{
                disableOnInteraction: false,
            }}
            module={[EffectFade, Parallax]}
            effect="fade"
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={5}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            
            className="px-3"
        >
            <section>
               
                {cardData.map((card, i) => {
                    return (
                        <SwiperSlide className="testi-slides w-full">
                            <div class="mb-10 p-10 h-4/5 test-item shadow-lg rounded-xl " key={i} >
                                <div class="text-center">
                                    <img
                                        alt="testimonial"
                                        class="w-24 h-24 mb-3 object-cover object-center rounded-full inline-block border-1 border-yellow-500 shadow-md"
                                        src={card.pic}
                                    />
                                    <p class="leading-normal text-sm font-poppins">
                                        {card.desc}
                                    </p>
                                    <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                    <h2 class="font-poppins text-base font-bold title-font tracking-wider mb-2.5">
                                        {card.name}
                                    </h2>
                                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        {card.post}
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </section>
        </Swiper>
    );
};
