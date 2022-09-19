import React, { useRef, useState } from 'react';
import './contact.css';
import {SiGmail} from 'react-icons/si';
import {SiMessenger} from 'react-icons/si';
import {IoLogoWhatsapp} from 'react-icons/io';
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formSend, setFormSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9qv6wk', 'template_bf65s06', form.current, 'KgiCeIffnP7o4D68Q')
      .then((result) => {
          setFormSend(true)
          setTimeout(() => setFormSend(false), 5000);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Ponte en contacto conmigo</h5>
      <h2>Contacto</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='text'>eandrada.dev@gmail.com</h5>
            <a href='mailto:eandrada.dev@gmail.com' target='_blank'>Enviar mail</a>
          </article>

          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5 className='text'>facebook.com/elias.andrada.3</h5>
            <a href='https://m.me/elias.andrada.3' target='_blank'>Enviar Messenger</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5 className='text'>+54 9 3572 536283</h5>
            <a href='https://wa.me/+5493572536283' target='_blank'>Enviar Whatsapp</a>
            {/* 'https://api.whatsapp.com/send?phone=+543572536283' */}
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input name='name' placeholder='Su nombre completo...' required/>
          <input name='email' placeholder='Su email...' required/>
          <textarea name='message' rows='7' placeholder='Su mensaje...'></textarea>
          {formSend && (
          <small className='contact__send-message'>Mensaje enviado!😊</small>
          )}
          <button type='submit' className='btn btn-primary'>Enviar</button>
        
        </form>
      </div>
    </section>
  )
}

export default Contact;