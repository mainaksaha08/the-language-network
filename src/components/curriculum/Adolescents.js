import React from 'react'
import { useState } from 'react';
import AdolescentsTable from './AdolescentsTable';


function Adolescents() {

    const [adkey, setKey] = useState(1);
    const Description = () => {
        switch (adkey) {
            case 1:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        Children may be the quickest at learning languages, but teenagers are right behind them. Adolescents speak one or two languages by virtue of their age, residence, and schooling.
                    </p>
                );
            case 2:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        This might be the most obvious benefit of learning any foreign language. Learning a language as an adolescent automatically opens up educational and job opportunities abroad.
                    </p>
                )
            case 3:
                return (
                    <p className='w-full text-gray-500 fadeIN'>

                        At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.
                    </p>
                )
            case 4:
                return (
                    <p className='w-full text-gray-500 fadeIN'>
                        TLN offers online classes per your convenience- you can choose a class according to your time. This means that once you enrol with us, you will get access to pre-recorded lectures, and extra learning material, apart from the live lectures that take place. The learning is more experiential than classroom-based.
                    </p>
                )

            default:
                break;
        }
    }

    return (
        <div>
            <div className="Home-container-2 px-5 fadeIN" style={{width: '100%'}}>
                <h2>A Fun, Proven method for Learning</h2>
                <h1 className='mb-12'>Choose a language</h1>
                <div className='Home-container-2-imgs'>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-English@300x.png' /><span className='Home-container-2-img-span'>English</span></a>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-French@300x.png' /><span className='Home-container-2-img-span'>French</span></a>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-Spanish@300x.png' /><span className='Home-container-2-img-span'>Spanish</span></a>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-German@300x.png' /><span className='Home-container-2-img-span'>German</span></a>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-mandarin_1@300x.png' /><span className='Home-container-2-img-span'>Mandarin</span></a>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-mandarin@300x.png' /><span className='Home-container-2-img-span'>Japanese</span></a>
                    <a><img className='Home-container-2-img' alt='img' src='/images/Adolcents-Korean@300x.png' /><span className='Home-container-2-img-span'>Korean</span> </a>
                </div>
            </div>
            <div className='h-[85vh] px-80 text-center flex flex-column items-center justify-center bgimg'>
                <h1 className='text-white font-semibold text-4xl mb-12'>Foreign Language Education for Everyone!</h1>
                <p className='text-white font-medium text-lg px-4 mt-2'>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                <p className='text-white font-medium text-lg px-4 mt-2 mb-3'>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                <button type="button" class="btn btn-outline-light rounded-xl px-8 py-3 font-medium">Book A Trial Class</button>
                <img src="/images/adolscents-book@300x.png" alt="alt" className='w-5/12 absolute bottom-[-2.8rem] curvedBg' />
            </div>
            <div className='infosec w-full p-20 flex flex-row items-center mt-24'>
                <div className='p-2 w-[40%]'>
                    <h1 className='font-medium text-3xl'>Teaching young children a second language is beneficial in many ways</h1>
                    <p className='text-gray-700 text-md'>Our suggestion? Learn a foreign language with The Language Network!</p>
                </div>
                <div className='w-[20%] flex flex-col justify-between'>
                    <a onClick={() => setKey(1)} id={adkey === 1 ? 'btnP' : ''} class=" bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Adolescents are quick learners
                    </a>
                    <a onClick={() => setKey(2)} id={adkey === 2 ? 'btnP' : ''} class="bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Opportunities abroad
                    </a>
                    <a onClick={() => setKey(3)} id={adkey === 3 ? 'btnP' : ''} class=" bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Opens their eyes
                    </a>
                    <a onClick={() => setKey(4)} id={adkey === 4 ? 'btnP' : ''} class=" bg-white py-3 px-10 mt-3 text-md poppins cursor-pointer text-center rounded-lg shadow ">
                        Works around tight schedule
                    </a>
                </div>
                <div className='w-[60%] px-4'>
                    <Description />
                </div>
            </div>
            <AdolescentsTable />
        </div>
    )
}

export default Adolescents
