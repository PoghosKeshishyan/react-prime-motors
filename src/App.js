import { navbar_data, footer_data } from './databace';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { CompanyPage } from './pages/CompanyPage';
import { AboutPage } from './pages/AboutPage';
import { MissionPage } from './pages/MissionPage';
import { ServicesPage } from './pages/ServicesPage';
import { PartnersPage } from './pages/PartnersPage';
import { BranchesPage } from './pages/BranchesPage';
import { BlogPage } from './pages/BlogPage';
import { PromotionPage } from './pages/PromotionPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

export function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [navbar, setNavbar] = useState([]);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    installingCurrentLang();
    loadingData(currentLanguage);
  }, [currentLanguage])

  const loadingData = (currentLanguage) => {
    const filteredNavbar = navbar_data.filter(item => item.lang === currentLanguage);
    setNavbar(filteredNavbar);

    const filteredFooter = footer_data.filter(item => item.lang === currentLanguage);
    setFooter(filteredFooter[0]);
  }

  const installingCurrentLang = () => {
    // installing the current language in the local storage
    if (!localStorage.getItem('primeMotors_lang')) {
      localStorage.setItem('primeMotors_lang', 'en');
    }

    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
  }

  return (
    <div>
      <Header navbar={navbar} />

      <Routes>
        <Route path='/' element={<CompanyPage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/our-mission' element={<MissionPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/partners' element={<PartnersPage />} />
        <Route path='/branches' element={<BranchesPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/promotion' element={<PromotionPage />} />
        <Route path='/contact-us' element={<ContactPage />} />
      </Routes>

      <Footer footer={footer} />
    </div>
  )
}
