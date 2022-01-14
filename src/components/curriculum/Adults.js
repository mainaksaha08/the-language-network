import React from 'react'

function Adults() {
    return (
        <div>
            <div className="Home-container-2 px-5 fadeIN">
                <h2>Curating a pleasant learning experience</h2>
                <h1 className='mb-6'>Choose a language</h1>
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
            <div className="Home-container-9" style={{backgroundColor: '#fff'}}>
                    <div className='Home-container-9-text' style={{width: '50%'}}>
                        <h1 style={{fontSize: '35px', color: '#000'}} className='mb-6'>Foreign Language Education for Everyone!</h1>
                        <p>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                        <p>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                        <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                            Book A Trial Class
                        </button>
                    </div>
                    <div className='Home-container-9-img' style={{width: '50%'}}>
                        <img src='/images/Adults_online-lecture.png' alt='img' className='certificate-img' />
                    </div>
            </div>
        </div>
    )
}

export default Adults;