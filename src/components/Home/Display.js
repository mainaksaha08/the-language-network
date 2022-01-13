import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import "swiper/css/pagination"

// import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper'

SwiperCore.use([Autoplay, Navigation, Pagination]);

function CardData() {
    const rtn = [{
        path: '/images/SliderImgs/trainer.png',
        title: "Expert Trainers",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/interactive-1.png',
        title: "Interactive Sessions",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/study-material-1.png',
        title: "Free Study Material",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/review-1.png',
        title: "Review Sessions",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/e-learning-1.png',
        title: "E-Learning",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/1_2-batch-1.png',
        title: "Small Batches",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/certified-1.png',
        title: "Certified Courses",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    }, {
        path: '/images/SliderImgs/counselling-1.png',
        title: "Free Counselling",
        description: "Expert Trainers Expert Trainers Expert Trainers",
    },

    ]
    return rtn;
}

export default () => {
    const cardData = CardData();
    return (
        <Swiper
        
            infinite
            autoplay={
                {
                    "delay": 3000,
                    "disableOnInteraction": true
                }
            }
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={5}
            breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 4, 
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 5
                }
            }}
             >
            <section> {
                cardData.map((card, i) => {
                    return (<SwiperSlide >
                        <div className="xl:w-1/3 md:w-1/2 card " id="card" key={i} >
                            <div class=" w-auto rounded-lg card-item flex items-center justify-evenly" >
                                <div class=" w-full h-full flex items-center justify-center rounded-full" >
                                    <img src={card.path} alt='img'/> 
                                </div>
                                <h2 className="text-normal text-gray-900 font-normal title-font ml-2 title text-center" > {card.title} </h2>
                                <p className="text-normal text-gray-900 font-normal title-font  ml-2 title text-center" > {card.description} </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })
            }
            </section>
        </Swiper>
    );
};