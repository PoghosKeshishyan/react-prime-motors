import { partners_page_label_data, partners_data } from '../databace';
import { useState, useEffect } from 'react';
import { PartnersContent } from '../components/PartnersContent';

export function PartnersPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [partnersLabel, setPartnersLabel] = useState({});
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData(currentLanguage);
  }, [currentLanguage])

  const loadingData = (currentLanguage) => {
    const filteredPartnersLabel = partners_page_label_data.filter(item => item.lang === currentLanguage);
    setPartnersLabel(filteredPartnersLabel[0]);

    const filteredPartners = partners_data.filter(item => item.lang === currentLanguage);
    setPartners(filteredPartners);
  }

  return (
    <div>
      <PartnersContent partnersLabel={partnersLabel} partners={partners} />
    </div>
  );
}
