import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaRegHandshake } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'
import { GiTakeMyMoney } from 'react-icons/gi'
import {Link} from 'react-scroll'


export default function IntroCourse() {
    return (
        <div>
            <div className="IntroCourse h-[80vh]" >
                <div className="bg-[rgba(0,0,0,0.3)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-[40rem] mx-24'>
                        <h1 className='text-6xl leading-snug text-white font-bold'>Speak a language confidently in only 30 days</h1>
                        <h1 className='text-md my-4 text-white font-medium'>Join our Introductory Courses</h1>
                        <Link  to="LearnLang" spy={true} smooth={false}><button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#16e9d0] rounded-3xl w-fit text-sm py-3 px-4 ">Choose Your Language <AiOutlineArrowDown className='self-center ml-2' /></button></Link>
                    </div>
                </div>
            </div>
            <h3 className='w-full text-4xl font-bold text-center mt-24 mb-20'>The best way to learn a language</h3>
            <div className='flex flex-row w-full px-24'>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><FaRegHandshake className='w-full h-full' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Instant Feedback</h2>
                        <p class="leading-relaxed my-2">Track your progress and get personalised feedback</p>
                    </div>
                </div>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><ImBook className='w-full h-full' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Accreditation</h2>
                        <p class="leading-relaxed my-2">Earn accredited certificate to boost your skills</p>
                    </div>
                </div>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><GiTakeMyMoney className='w-full h-full' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Big rewards</h2>
                        <p class="leading-relaxed my-2">Earn 100% cashback</p>
                    </div>
                </div>
            </div>
            <div id='LearnLang' className='h-auto bg-[#f4f8fb] w-full flex flex-row flex-wrap items-center'>
                <div className='w-1/2 px-24 '>
                    <h3 className='font-semibold text-5xl my-4'>Languages you can learn</h3>
                    <h1 className='my-4'>Invest a mere month of your time to learn a language.</h1>
                    <button type="button" class="flex flex-row btn btn-outline-dark hover:bg-[#13bfab] rounded-full  w-fit text-md py-3 px-4 ">Download Brochure</button>
                </div>
                <div className='w-1/2 flex flex-row flex-wrap'>
                    <div className='w-24 w-1/2 lg:px-28 lg:py-10 sm:p-0 flex flex-col  items-center'>
                        <img src="/images/French.png" alt="img" className='' />
                        <h2 className='font-medium text-2xl mt-3'>French</h2>
                    </div>
                    <div className='w-24 w-1/2 lg:px-28 lg:py-10 sm:p-0 flex flex-col  items-center'>
                        <img src="/images/German.png" alt="img" className='' />
                        <h2 className='font-medium text-2xl mt-3'>German</h2>
                    </div>
                    <div className='w-24 w-1/2 lg:px-28 lg:py-10 sm:p-0 flex flex-col  items-center'>
                        <img src="/images/Spanish.png" alt="img" className='' />
                        <h2 className='font-medium text-2xl mt-3'>Spanish</h2>
                    </div>
                    <div className='w-24 w-1/2 lg:px-28 lg:py-10 sm:p-0 flex flex-col  items-center'>
                        <img src="/images/Korean.png" alt="img" className='' />
                        <h2 className='font-medium text-2xl mt-3'>Korean</h2>
                    </div>
                </div>
                <div className='w-full text-center text-xs mb-5'>*To receive the cashback you must follow The Language Network T&C’s.</div>
            </div>
            <div className='w-full flex lg:flex-row flex-col justify-center'>

                <div class="lg:w-1/4 w-full rounded-lg shadow-lg overflow-hidden mb-4 lg:mx-20">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 relative">
                        <div class="flex justify-center">
                            <span class="inline-flex px-4 py-1 text-dark dark:text-white rounded-full text-lg leading-5 font-semibold tracking-wide uppercase">
                                Weekday Batches
                            </span>
                        </div>
                        <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold text-dark  dark:text-white">
                            ₹ 2990
                            <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-dark dark:text-gray-400">
                                /-
                            </span>
                        </div>

                    </div>
                    <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                        <ul>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">

                                    1 month, 5 hours per week
                                </p>
                            </li>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Earn 100% cashback
                                </p>
                            </li>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Study materials
                                </p>
                            </li>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    French / Spanish/ German/ Korean
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6 rounded-md shadow">
                            <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#13bfab] hover:bg-[#16e9d0] focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                ENROLL NOW
                            </a>
                        </div>
                    </div>

                </div>
                <div class="lg:w-1/4 w-full rounded-lg shadow-lg overflow-hidden mb-4 lg:mx-20">
                    <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 relative">
                        <div class="flex justify-center">
                            <span class="inline-flex px-4 py-1 text-dark dark:text-white rounded-full text-lg leading-5 font-semibold tracking-wide uppercase">
                                Weekday Batches
                            </span>
                        </div>
                        <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold text-dark  dark:text-white">
                            ₹ 2990
                            <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-dark dark:text-gray-400">
                                /-
                            </span>
                        </div>

                    </div>
                    <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                        <ul>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">

                                    1 month, 5 hours per week
                                </p>
                            </li>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Earn 100% cashback
                                </p>
                            </li>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Study materials
                                </p>
                            </li>
                            <li class="mt-4 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    French / Spanish/ German/ Korean
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6 rounded-md shadow">
                            <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#13bfab] hover:bg-[#16e9d0] focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                ENROLL NOW
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
