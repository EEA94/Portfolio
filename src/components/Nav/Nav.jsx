import React, {useState} from 'react';
import './nav.css';
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {RiMailSendLine} from 'react-icons/ri'

const Nav = () => {
const [active, setActive] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActive('#')} className={active === '#' ? 'active' : ''} title='Principal'><BiHome/></a>
      <a href="#about" onClick={()=> setActive('about')} className={active==='about' ? 'active' : ""} title='Sobre mi'><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActive('experience')} className={active==='experience' ? 'active' : ""} title='Experiencia'><FaLaptopCode/></a>
      <a href="#services" onClick={()=> setActive('services')} className={active==='services' ? 'active' : ""} title='Servicios'><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActive('contact')} className={active==='contact' ? 'active' : ""} title='Contacto'><RiMailSendLine/></a>
    </nav>
  )
}

export default Nav