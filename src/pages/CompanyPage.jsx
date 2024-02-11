import { slider_data, company_page_label_data, company_about_data } from '../databace';
import { useEffect, useState } from 'react';
import { Slider } from '../components/Slider';
import { AboutUsContent } from '../components/AboutUsContent';
import { ScrollTop } from '../components/ScrollTop';

export function CompanyPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [slider, setSlider] = useState([]);
  const [aboutUsLabel, setAboutUsLabel] = useState({});
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData(currentLanguage);
  }, [currentLanguage])

  const loadingData = (currentLanguage) => {
    const filteredSlider = slider_data.filter(item => item.lang === currentLanguage);
    setSlider(filteredSlider);

    const filteredCompanyLabel = company_page_label_data.filter(item => item.lang === currentLanguage);
    setAboutUsLabel(filteredCompanyLabel[0]);

    const filteredCompanyAbout = company_about_data.filter(item => item.lang === currentLanguage);
    setAboutUs(filteredCompanyAbout);
  }

  return (
    <div>
      <Slider slider={slider} />
      <AboutUsContent aboutUs={aboutUs} aboutUsLabel={aboutUsLabel} />
      <ScrollTop />
    </div>
  )
}
