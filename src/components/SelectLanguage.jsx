import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export function SelectLanguage() {
    const currentLanguage = localStorage.getItem('primeMotors_lang');
    const [showSelector, setShowSelector] = useState(false);

    const onChangeSelect = (event) => {
        const selectedLanguage = event.target.innerText.toLowerCase();
        localStorage.setItem('primeMotors_lang', selectedLanguage);
        window.location.reload();
    }

    return (
        <div onMouseMove={() => setShowSelector(true)} onMouseLeave={() => setShowSelector(false)} className='flex justify-center relative w-[70px]'>
            <p className='h-8 mt-[3px]'>
                <span className='text-[1.1rem] font-bold px-[.5rem]'>
                    {currentLanguage?.toUpperCase()}
                </span>
                <FontAwesomeIcon icon={showSelector ? faChevronUp : faChevronDown} />
            </p>

            {
                showSelector && <div className='absolute left-[50%] translate-x-[-50%] top-8 duration-500 p-0 text-center w-full cursor-pointer z-[100]' onClick={onChangeSelect}>
                    <p className='bg-slate-200 border-b border-slate-400 hover:text-red-600 py-1'>EN</p>
                    <p className='bg-slate-200 border-b border-slate-400 hover:text-red-600 py-1'>RU</p>
                    <p className='bg-slate-200 border-b border-slate-400 hover:text-red-600 py-1'>AM</p>
                </div>
            }
        </div>
    )
}
