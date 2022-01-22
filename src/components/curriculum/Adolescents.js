import React from 'react'

function Adolescents() {
    return (
        <div>
            <div className="Home-container-2 px-5 fadeIN">
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
                <img src="/images/adolscents-book@300x.png" alt="alt" className='w-3/5 curvedBg' />
            </div>
        </div>
    )
}

export default Adolescents
