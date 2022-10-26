import React from 'react';
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import {BsLinkedin} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Elias Andrada - Personal Website</a>

      <ul className='permalinks'>
        <li><a href='#'>Principal</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#portfolio'>Portafolio</a></li>
        <li><a href='#testimonials'>Testimonios</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/eliasandrada-dev/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.facebook.com/elias.andrada.3' target="_blank"><BsFacebook/></a>
        <a href='https://www.instagram.com/eliasandrada14/' target="_blank"><RiInstagramFill/></a>
        <a href='https:/t.me/eandrada' target="_blank"><BsTelegram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Elias Andrada Developer. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer