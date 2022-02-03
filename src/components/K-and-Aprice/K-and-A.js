import React from 'react';
import './K-and-A.css';
import { useState } from 'react';
import LearningPrices from './LearningPrices';

export default function KandA() {
    const English = {
        
    }
    const [language, setLanguage] = useState('English')
    const LanguageSec = () => {
        switch (language) {
            case 'English':
                return (<LearningPrices price={499}/>)
                break;
            case 'French':
                return (<LearningPrices />)
                break;
            case 'Spanish':
                return (<LearningPrices />)
                break;
            case 'German':
                return (<LearningPrices />)
                break;
            case 'Mandarin':
                return (<LearningPrices />)
                break;
            case 'Japanese':
                return (<LearningPrices />)
                break;
            case 'Korean':
                return (<LearningPrices />)
                break;

            default:
                break;
        }
    }
    


    return <div>
        <div className="Home-container-2 px-5 fadeIN" style={{ width: '100%' }}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs'>
                <a onClick={() => setLanguage('English')} ><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-English@300x.png' /><span className='Home-container-2-img-span'>English</span></a>
                <a onClick={() => setLanguage('French')} ><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-French@300x.png' /><span className='Home-container-2-img-span'>French</span></a>
                <a onClick={() => setLanguage('Spanish')} ><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-Spanish@300x.png' /><span className='Home-container-2-img-span'>Spanish</span></a>
                <a onClick={() => setLanguage('German')} ><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-German@300x.png' /><span className='Home-container-2-img-span'>German</span></a>
                <a onClick={() => setLanguage('Mandarin')} ><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-mandarin_1@300x.png' /><span className='Home-container-2-img-span'>Mandarin</span></a>
                <a onClick={() => setLanguage('Japanese')} ><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-mandarin@300x.png' /><span className='Home-container-2-img-span'>Japanese</span></a>
                <a onClick={() => setLanguage('Korean')} ><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img' alt='img' src='/images/Adolcents-Korean@300x.png' /><span className='Home-container-2-img-span'>Korean</span> </a>
            </div>
        </div>
        
        <LanguageSec />

    </div>;
}
