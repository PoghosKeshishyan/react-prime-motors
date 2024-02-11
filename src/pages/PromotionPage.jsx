import { promotion_page_label_data, promotion_data } from '../databace';
import { useState, useEffect } from 'react';
import { PromotionContent } from '../components/PromotionContent';

export function PromotionPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [promotionLabel, setPromotionLabel] = useState({});
  const [promotion, setPromotion] = useState([]);

  useEffect(() => {
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData(currentLanguage);
  }, [currentLanguage])

  const loadingData = (currentLanguage) => {
    const filteredPromotionLabel = promotion_page_label_data.filter(item => item.lang === currentLanguage);
    setPromotionLabel(filteredPromotionLabel[0]);

    const filteredPromotion = promotion_data.filter(item => item.lang === currentLanguage);
    setPromotion(filteredPromotion);
  }

  return (
    <div>
      <PromotionContent promotionLabel={promotionLabel} promotion={promotion} />
    </div>
  );
}
