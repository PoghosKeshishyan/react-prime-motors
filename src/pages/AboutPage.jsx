import { about_page_label_data, about_us_data } from '../databace';
import { useState, useEffect } from 'react';
import { AboutPageContent } from '../components/AboutPageContent';

export function AboutPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [aboutLabel, setAboutLabel] = useState([]);
    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
        loadingData(currentLanguage);
    }, [currentLanguage])

    const loadingData = (currentLanguage) => {
        const filteredAboutLabel = about_page_label_data.filter(item => item.lang === currentLanguage);
        setAboutLabel(filteredAboutLabel[0]);

        const filteredAboutUs = about_us_data.filter(item => item.lang === currentLanguage);
        setAboutUs(filteredAboutUs);
    }

    return (
        <div>
            <AboutPageContent aboutLabel={aboutLabel} aboutUs={aboutUs} />
        </div>
    );
}

