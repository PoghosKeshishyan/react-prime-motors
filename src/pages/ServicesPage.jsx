import { services_page_label_data, services_data } from '../databace';
import { useState, useEffect } from 'react';
import { ServicesContent } from '../components/ServicesContent';

export function ServicesPage() {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [servicesLabel, setSevicesLabel] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
        loadingData(currentLanguage);
    }, [currentLanguage])

    const loadingData = (currentLanguage) => {
        const filteredServicesLabel = services_page_label_data.filter(item => item.lang === currentLanguage);
        setSevicesLabel(filteredServicesLabel[0]);

        const filteredServices = services_data.filter(item => item.lang === currentLanguage);
        setServices(filteredServices);
    }

    return (
        <div>
            <ServicesContent servicesLabel={servicesLabel} services={services} />
        </div>
    );
}

