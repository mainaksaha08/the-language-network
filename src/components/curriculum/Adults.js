import React from 'react'
import { useState } from 'react';
import French from './LangLvl/French';
import Spanish from './LangLvl/Spanish';
import German from './LangLvl/German';
import Mandarin from './LangLvl/Mandarin';
import Japanese from './LangLvl/Japanese';
import Korean from './LangLvl/Korean';
import English from './LangLvl/English';
import AdultsTable from './AdultsTable'


function Adults() {

    const [lang, setLang] = useState('french')
    const Languages = () => {
        switch (lang) {
            case 'french':
                return (<French />)
                break;
            case 'spanish':
                return (<Spanish />)
                break;
            case 'german':
                return (<German />)
                break;
            case 'mandarin':
                return (<Mandarin />)
                break;
            case 'japanese':
                return (<Japanese />)
                break;
            case 'korean':
                return (<Korean />)
                break;
           
                case 'English':
                    return (<English />)
                    break;
                    default: 
        }
    };

    return (
        <div>
            <div className="Home-container-2 px-5 fadeIN" style={{width: '100%'}}>
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
            <div className="Home-container-9" style={{ backgroundColor: '#fff' }}>
                <div className='Home-container-9-text' style={{ width: '50%' }}>
                    <h1 style={{ fontSize: '35px', color: '#000' }} className='mb-6'>Foreign Language Education for Everyone!</h1>
                    <p>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                    <p>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                    <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                        Book A Trial Class
                    </button>
                </div>
                <div className='Home-container-9-img' style={{ width: '50%' }}>
                    <img src='/images/Adults_online-lecture.png' alt='img' className='certificate-img' />
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <a onClick={() => setLang('french')} id={lang === 'french' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    FRENCH
                </a>
                <a onClick={() => setLang('spanish')} id={lang === 'spanish' ? 'btnP' : ''} class="buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                    SPANISH
                </a>
                <a onClick={() => setLang('german')} id={lang === 'german' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    GERMAN
                </a>
                <a onClick={() => setLang('mandarin')} id={lang === 'mandarin' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    MANDARIN
                </a>
                <a onClick={() => setLang('japanese')} id={lang === 'japanese' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    JAPANESE
                </a>
                <a onClick={() => setLang('korean')} id={lang === 'korean' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    KOREAN
                </a>
                <a onClick={() => setLang('English')} id={lang === 'English' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    English
                </a>
            </div>
            <div className='flex justify-center'>
                <Languages />
            </div>

            <AdultsTable />

        </div>
    )
}

export default Adults;