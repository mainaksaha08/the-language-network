import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Sec3() {

    AOS.init()

    // function changeCol1() {
    //     document.getElementById('Home-card-text-h1').style.color = '#460090';
    //     document.getElementById('Home-card-1').style.boxShadow = '0px 0px 38px -10px #460090';
    // }

    // function changeCol2() {
    //     document.getElementById('Home-card-text-h2').style.color = '#f2b919';
    //     document.getElementById('Home-card-2').style.boxShadow = '0px 0px 38px -10px #f2b919';

    // }

    // function changeCol3() {
    //     document.getElementById('Home-card-text-h3').style.color = '#13bfab';
    //     document.getElementById('Home-card-3').style.boxShadow = '0px 0px 38px -10px #13bfab';

    // }

    // function changeBack() {
    //     document.getElementById('Home-card-text-h1').style.color = '#000';
    //     document.getElementById('Home-card-text-h2').style.color = '#000';
    //     document.getElementById('Home-card-text-h3').style.color = '#000';
    //     document.getElementById('Home-card-1').style.boxShadow = 'none';
    //     document.getElementById('Home-card-2').style.boxShadow = 'none';
    //     document.getElementById('Home-card-3').style.boxShadow = 'none';

    // }

    return <div className='flex flex-col items-center mt-32'>
        <div className="Home-container-3">
            <h1>
                Students at The Language Network
            </h1>
            <p>
                We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
            </p>
        </div>

        {/* <div className="Home-container-4">
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
        </div> */}
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-20 mx-auto">
                <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                    <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                        <img src="/images/account.png" alt="img" className='' />
                    </div>
                    <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h1 className='text-xl tracking-widest font-medium text-black'>STEP 1</h1>
                        <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Register with us</h2>
                        <p class="leading-relaxed text-black ">Fill out a form with your personal and contact information, choose your language and register with us. Our team of experts will will assist you with the online classes, study materials and lots more.</p>
                    </div>
                </div>
                <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                    <div class="flex-grow sm:text-right sm:mr-24 mt-6 sm:mt-0">
                        <h1 className='text-xl tracking-widest font-medium text-black'>STEP 2</h1>
                        <h2 class="poppins text-[#f2b919] text-2xl font-medium mb-8">Access your virtual classroom</h2>
                        <p class="leading-relaxed text-black ">Learn on your own schedule: Based on your type of class you chose (Eg: Group, Duo or 1:1) You will be provided with the zoom link to join your respective language class.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                        <img src="/images/classroom.png" alt="img"/>
                    </div>
                </div>
                <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                    <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                        <img src="/images/get-started.png" alt="img"/>
                    </div>
                    <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                        <h1 className='text-xl tracking-widest font-medium text-black'>STEP 3</h1>
                        <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Get started</h2>
                        <p class="leading-relaxed text-black ">Practice what you learn with other students. We provide small batches, so you’ll get personalized attention with the expert language teachers.</p>
                    </div>
                </div>

            <div className='w-full flex  justify-center'>
            <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                Book A Trial Class
            </button>
            </div>
            </div>
        </section>
    </div>;
}
