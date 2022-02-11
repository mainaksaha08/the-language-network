import React from 'react';
import './homeRes.css'
import { FaCircle } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import react from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import './Home.css';    

import Display from "./Display";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Testimonial from './testimonial.js';

// import images for International Exams

import img1 from '../IntExamswiper/exam-dele.jpg';
import img2 from '../IntExamswiper/exam-delf-dalf.jpg';
import img3 from '../IntExamswiper/exam-goethe.jpg';
import img4 from '../IntExamswiper/exam-Hsk.jpg';
import img5 from '../IntExamswiper/exam-ielts.jpg';
import img6 from '../IntExamswiper/exam-JLPT.jpg';
import img7 from '../IntExamswiper/exam-siele.jpg';
import img8 from '../IntExamswiper/exam-TEF.jpg';
import img9 from '../IntExamswiper/exam-TOPIK.jpg';
import Curriculum from '../curriculum/Curriculum';

SwiperCore.use([Autoplay, Pagination, Navigation]);



class Home extends react.Component {

    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }

    render() {
        function changeCol1() {
            document.getElementById('Home-card-text-h1').style.color = '#460090';
            document.getElementById('Home-card-1').style.boxShadow = '0px 0px 38px -10px #460090';
        }

        function changeCol2() {
            document.getElementById('Home-card-text-h2').style.color = '#f2b919';
            document.getElementById('Home-card-2').style.boxShadow = '0px 0px 38px -10px #f2b919';

        }

        function changeCol3() {
            document.getElementById('Home-card-text-h3').style.color = '#13bfab';
            document.getElementById('Home-card-3').style.boxShadow = '0px 0px 38px -10px #13bfab';

        }

        function changeBack() {
            document.getElementById('Home-card-text-h1').style.color = '#000';
            document.getElementById('Home-card-text-h2').style.color = '#000';
            document.getElementById('Home-card-text-h3').style.color = '#000';
            document.getElementById('Home-card-1').style.boxShadow = 'none';
            document.getElementById('Home-card-2').style.boxShadow = 'none';
            document.getElementById('Home-card-3').style.boxShadow = 'none';

        }

        return (
            <div className='Home'>
                <div className='Home-container-1'>
                    <div className='Home-container-1-sec-1'>
                        <h1><FaCircle style={{ color: '#f2b919', fontSize: '14px', marginRight: '5px' }} />LIVE ONLINE CLASSES</h1>
                        <h2>Learn a Language in less than 3 months</h2>
                        <span>At The Language Network, we help you master a new foreign language of your choice from the comfort of your home.</span>
                        <div><button type="button" class="btn btn-info text-white" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Book a free trial</button></div>
                    </div>
                    <div className='Home-container-1-sec-2'>
                        <video controls Autoplay className='Home-container-1-sec-1-video'>
                            <source src="/videos/TLN_Hello-in-different-languages.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="smallscr">
                        <div className='overlay-box2'>
                            <h1><CountUp start={0} end={5000} separator=","
                                suffix="+" duration={1}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h2>Students</h2>
                        </div>
                        <div className='overlay-box2'>
                            <div className='stars2'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                            <h2>5 Star Rating</h2>
                        </div>
                        <div className='overlay-box2'>
                            <h1><CountUp start={0} end={200} separator=","
                                suffix="+" duration={1}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h2>Expert Trainers</h2>
                        </div>

                    </div>

                <div className="Home-container-2" >
                    <h1>START YOUR JOURNEY WITH US!</h1>
                    <h2>Select a Foreign Language Course</h2>
                    <div className='Home-container-2-imgs'>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-english@300x.png' /></a>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-french@300x.png' /></a>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-spanish@300x.png' /></a>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-german@300x.png' /></a>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-japanese@300x.png' /></a>
                        <a><img className='Home-container-2-img' alt='img' src='/images/adults-korean@300x.png' /></a>
                    </div>
                </div>

                <div className="Home-container-3">
                    <h1>
                        Students at The Language Network
                    </h1>
                    <p>
                        We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
                    </p>
                </div>

                <div className="Home-container-4">
                    <div className="Home-cards" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                        <div className="Home-card-img">
                            <img src='/images/Adolscents@300x.png' alt='img' />
                        </div>
                        <div className='Home-card-text'>
                            <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                            <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                        </div>
                    </div>
                    <div className="Home-cards" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                        <div className="Home-card-img">
                            <img src='/images/Kids@300x-1.png' alt='img' />
                        </div>
                        <div className='Home-card-text'>
                            <h1 id='Home-card-text-h2'>Adolscents (10-13 years)</h1>
                            <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                        </div>
                    </div>
                    <div className="Home-cards" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
                        <div className="Home-card-img">
                            <img src='/images/adults@300x.png' alt='img' />
                        </div>
                        <div className='Home-card-text'>
                            <h1 id='Home-card-text-h3'>Adults (14+ years)</h1>
                            <p>Getting a certificate is an essential part of verifying your language skills. TLN prepares you for all types of language exams with the professional assistance of highly-qualified teachers. We also offer online classes per your convenience.</p>
                        </div>
                    </div>
                </div>

                <div className="Home-container-5">
                    <div className='Home-container-5-sec-1'>
                        <h1>Our courses are aligned with the CEFR levels</h1>
                        <p>
                            <span className='bold'>
                                CEFR (Common European Framework of Reference for Languages)
                            </span>
                            is an internationally recognized standard that describes your learning progress in more detail. The framework helps you to explain your level from Beginner (A1) to Advanced (C2).
                        </p>
                        <p>
                            All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                        </p>
                    </div>
                    <div className='Home-container-5-sec-2'>
                        <img src='/images/CEFR-LEVELS-1.png' alt='img' />
                    </div>
                </div>

                <div className="Home-container-6">
                    <div className='Home-container-6-text'>
                        <h1>WE PREPARE YOU FOR</h1>
                        <h2>International Exams</h2>
                    </div>
                    <Swiper  spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                          slidesPerView : 1

                        },
                        768: {
                          slidesPerView : 3
                        }
                      }}
                    pagination={{
                        "clickable": true
                    }} navigation={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} className="mySwiper">
                        <SwiperSlide>
                            <img src={img1} alt='img' />
                        </SwiperSlide><SwiperSlide>
                            <img src={img2} alt='img' />
                        </SwiperSlide><SwiperSlide>
                            <img src={img3} alt='img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt='img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt='img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img6} alt='img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img7} alt='img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img8} alt='img' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img9} alt='img' />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="Home-container-7">
                    <div className='Home-container-7-text'>
                        <h1>The Language Network saves you Money & Time</h1>
                        <p>Our online classes cut out that stressful commute so you can focus your energy on learning. We offer quality courses at affordable prices, with no hidden costs. Up to 30% cheaper than traditional language schools.</p>
                    </div>
                    <div className='Home-container-7-circle'>
                        <div class="progress blue">  <span class="progress-right"> <span class="progress-bar"></span> </span>
                            <div class="progress-value">30% Lower</div>
                        </div>
                    </div>
                </div>

                <div className="Home-container-8">
                    <h1>FROM LEARNING A NEW LANGUAGE TO LIVING IT!</h1>
                    <h2>Why you should learn with The Language Network?</h2>
                    <Display />
                </div>

                <div className="Home-container-9">
                    <div className='Home-container-9-text'>
                        <h1>TRANSFORM YOUR CAREER</h1>
                        <h2>Earn Your Certification </h2>
                        <p>Learn a foreign language as a step to boost your career or improve your CV.</p>
                        <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                            JOIN A COURSE
                        </button>
                    </div>
                    <div className='Home-container-9-img'>
                        <img src='/images/certificate-mockup.png' alt='img' className='certificate-img' />
                    </div>
                    <img src='/images/dots-circle.png' alt='img' className='dots-circle-1' />
                    <img src='/images/dots-circle.png' alt='img' className='dots-circle-2' />
                </div>

                <div className="Home-container-10">
                    <div className='Home-container-10-Heading'>
                        <h1>Speak with</h1>
                        <h2>Confidence</h2>
                    </div>

                    <div className='Home-container-10-paras'>
                        <p className='para'>
                            Every language learner needs a great teacher to pave the way in mastering a foreign language.
                        </p>
                        <p className='para'>
                            This is why “The Language Network” follows a didactic approach at its core. The result is a powerful curriculum with interactives sessions available at your fingertips — wherever you may be and whenever you want to learn.
                        </p>
                        <p className='para'>
                            We truly understand that authenticity is key to fully exploring a foreign language.
                        </p>
                    </div>

                    <div className="Home-container-10-overlay">
                        <div className='overlay-box'>
                            <h1><CountUp start={0} end={5000} separator=","
                                suffix="+" duration={1}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h2>Students</h2>
                        </div>
                        <div className='overlay-box'>
                            <div className='stars'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                            <h2>5 Star Rating</h2>
                        </div>
                        <div className='overlay-box'>
                            <h1><CountUp start={0} end={200} separator=","
                                suffix="+" duration={1}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp></h1>
                            <h2>Expert Trainers</h2>
                        </div>

                    </div>
                </div>

                <Curriculum />

                <div className="Home-container-11">
                    <h1>Happy Testimonials</h1>
                    <hr></hr>
                    <Testimonial />
                </div>

            </div>

        )
    }
}

export default Home;