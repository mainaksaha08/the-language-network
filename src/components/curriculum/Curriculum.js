import React from 'react';
import Sec1 from './Sec1'
import Sec2 from './Sec2';
import ReactDOM from 'react-dom';
import Sec3 from './Sec3';


export default function Curriculum() {
    return (<>
        <div id='Curriculum' className='curriculum'>
            <Sec1 />
            <Sec2 />
            <Sec3 />
        </div>
    </>
    )
}
