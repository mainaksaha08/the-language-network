import React from 'react';

export default function Sec3() {

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

    return <div className='flex flex-col items-center mt-32'>
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
                    <h1 id='Home-card-text-h2'>Kids (6-9 years)</h1>
                    <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                </div>
            </div>
            <div className="Home-cards" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
                <div className="Home-card-img">
                    <img src='/images/adults@300x.png' alt='img' />
                </div>
                <div className='Home-card-text'>
                    <h1 id='Home-card-text-h3'>Kids (6-9 years)</h1>
                    <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                </div>
            </div>
        </div>
    </div>;
}
