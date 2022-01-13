import React from 'react';
import './Curriculum.css';


export default function Sec1() {
    return (
        <div className='curriculum'>
            <div className="curr-container-1">
                <div className='curr-container-1-text'>
                    <h1 className='py-2'>OUR CURRICULUM</h1>
                    <h2 className='font-medium'>Become fluent in any language</h2>
                    <ul>
                        <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2'/>Live 1:1, Duo and Group Online Classes</li>
                        <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2'/>Flexible timings</li>
                        <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2'/>Take learning beyond the classroom</li>
                    </ul>
                </div>
                <div className='curr-container-1-img'>
                    <img src='/images/Curriculum_banner_1.png' alt='img'/>
                </div>
            </div>
        </div>
    )
}
