import { useRef, useState } from 'react';
import { ModalOnSendEmail } from './ModalOnSendEmail';
import emailjs from '@emailjs/browser';

export function ContactForm({ contactsLabel, contacts }) {
  const [modalOnSuccess, setModalOnSuccess] = useState(false);
  const [modalOnError, setModalOnError] = useState(false);

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_uaks41j',
        'template_9j5gxey',
        form.current, {
        publicKey: '558Pe71rkrfAf3R8Y',
      })
      .then(() => {
        form.current.reset();
        setModalOnSuccess(true);
        setTimeout(() => setModalOnSuccess(false), 4000);
      })
      .catch(error => {
        setModalOnError(true);
        setTimeout(() => setModalOnError(false), 4000);
        console.log('FAILED...', error.text);
      },);
  };

  return (
    <div>
      <div className='flex flex-col h-[100vh] items-center'>
        <div className='my-6 mx-auto max-w-xl font-sans'>
          <h1 className='text-3xl font-extrabold text-center text-red-600'>Contact</h1>

          <h2 className='text-center text-3xl text-red-500 font-bold mt-24 mb-10'>
            {contactsLabel?.title}
          </h2>

          <ModalOnSendEmail 
            contactsLabel={contactsLabel} 
            modalOnSuccess={modalOnSuccess} 
            modalOnError={modalOnError} 
            setModalOnError={setModalOnError}
          />

          <form ref={form} onSubmit={sendEmail} className='mt-8 space-y-4 w-full max-w-md'>
            <input
              type='text'
              placeholder={contacts?.name}
              required
              name='user_name'
              className='w-full rounded-md border border-red-600 py-3 px-4 text-sm focus:outline-slate-700'
            />
            <input
              type='email'
              placeholder={contacts?.email}
              name='user_email'
              className='w-full rounded-md border border-red-600 py-3 px-4 text-sm focus:outline-slate-700'
            />

            <textarea
              placeholder={contacts?.message}
              name='message'
              rows='6'
              className='w-full rounded-md border border-red-600 py-3 px-4 text-sm resize-none focus:outline-slate-700'
            ></textarea>

            <button
              type='submit'
              className='border border-red-600 text-red-600 font-semibold rounded-md text-sm px-4 py-3 w-full transition-all group'
            >
              <span className='group-hover:border-b-2 group-hover:border-red-600 pb-0.5  transition-all'>{contacts?.btn_text}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}