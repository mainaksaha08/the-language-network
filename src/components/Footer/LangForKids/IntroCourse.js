import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import {FaRegHandshake} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {GiTakeMyMoney} from 'react-icons/gi'

export default function IntroCourse() {
    return (
        <div>
            <div className="IntroCourse h-[80vh]" >
                <div className="bg-[rgba(0,0,0,0.3)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-[40rem] mx-24'>
                        <h1 className='text-6xl leading-snug text-white font-bold'>Speak a language confidently in only 30 days</h1>
                        <h1 className='text-md my-4 text-white font-medium'>Join our Introductory Courses</h1>
                        <button type="button" class="flex flex-row btn btn-outline-light rounded-3xl w-fit text-sm py-3 px-4 ">Choose Your Language <AiOutlineArrowDown className='self-center ml-2' /></button>
                    </div>
                </div>
            </div>
            <h3 className='w-full text-4xl font-bold text-center mt-24 mb-20'>The best way to learn a language</h3>
            <div className='flex flex-row w-full px-24'>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><FaRegHandshake className='w-full h-full'/></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Instant Feedback</h2>
                        <p class="leading-relaxed my-2">Track your progress and get personalised feedback</p>
                    </div>
                </div>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><ImBook className='w-full h-full'/></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Accreditation</h2>
                        <p class="leading-relaxed my-2">Earn accredited certificate to boost your skills</p>
                    </div>
                </div>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><GiTakeMyMoney className='w-full h-full'/></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Big rewards</h2>
                        <p class="leading-relaxed my-2">Earn 100% cashback</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
