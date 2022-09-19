import React from 'react';
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import {AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Elias Andrada - Personal Website</a>

      <ul className='permalinks'>
        <li><a href='#'>Principal</a></li>
        <li><a href='about'>Sobre mi</a></li>
        <li><a href='experience'>Experiencia</a></li>
        <li><a href='services'>Servicios</a></li>
        <li><a href='portfolio'>Portafolio</a></li>
        <li><a href='testimonials'>Testimonios</a></li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https:/facebook.com'><BsFacebook/></a>
        <a href='https:/instagram.com'><RiInstagramFill/></a>
        <a href='https:/twitter.com'><AiFillTwitterCircle/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Elias Andrada Developer. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer