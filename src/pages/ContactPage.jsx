import { contacts_page_label_data, contacts_data } from '../databace';
import { useState, useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [contactsLabel, setContactsLabel] = useState({});
  const [contacts, setContacts] = useState([]);

  useEffect(() => { 
    setCurrentLanguage(localStorage.getItem('primeMotors_lang'));
    loadingData(currentLanguage);
  }, [currentLanguage])

  const loadingData = (currentLanguage) => {
    const filteredContactLabel = contacts_page_label_data.filter(item => item.lang === currentLanguage);
    setContactsLabel(filteredContactLabel[0]);

    const filteredContact = contacts_data.filter(item => item.lang === currentLanguage);
    setContacts(filteredContact[0]);
  }

  return (
    <div>
      <ContactForm contactsLabel={contactsLabel} contacts={contacts} />
    </div>
  );
}

