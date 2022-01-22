import React from 'react'
import Adults from './Adults';
import Adolescents from './Adolescents';
import Kids from './Kids';
import { useState } from 'react';



export default function Sec2() {
    const [Lvl, setLvl] = useState(1)
    const Age = () => {
        if (Lvl === 1) {
            return <Adults />
        } else if (Lvl === 2) {
            return <Adolescents />;
        } else {
            return <Kids />
        }
    };



    return (
        <div>
            <div className='w-full flex justify-center'>
                <a onClick={() => setLvl(1)} id={Lvl===1 ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                Adults Curriculum
                </a>
                <a onClick={() => setLvl(2)} id={Lvl===2 ? 'btnP' : ''} class="buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                Adolescents Curriculum
                </a>
                <a onClick={() => setLvl(3)} id={Lvl===3 ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                Kids Curriculum 
                </a>
            </div>
            <Age />
        </div>




    )
}


