import React from 'react';
import { useState } from 'react';
import PricingTable from './PricingTable';


export default function LearningPrices(props) {

    const [Opt, setOpt] = useState(1)
    const LearningPrices = () => {
        switch (Opt) {
            case 1:
                return <PricingTable english={props.price}/>;
                break;
            case 2:
                return <PricingTable monthly={599} />;
                break;  
            case 3:
                return <PricingTable />;
                break;
            default:
                break;
        }
    };


    return <div>
        <div className='w-full flex justify-center fadeIN'>
            <a onClick={() => setOpt(1)} id={Opt === 1 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Personal Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 1 Student)</h2>
            </a>
            <a onClick={() => setOpt(2)} id={Opt === 2 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Duo Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 2 Student)</h2>
            </a>
            <a onClick={() => setOpt(3)} id={Opt === 3 ? 'btnP' : ''} class="flex flex-row text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                <h1 className='text-xl font-medium'>Group Learning</h1>
                <h2 className='text-gray-800 text-sm'>(1 Teacher & 6 Student)</h2>
            </a>
        </div>
        <LearningPrices />
    </div>;
}
