import React from 'react';
import './services.css';
import {BsCheck} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>Que ofrezco</h5>
      <h2>Servicios</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* <<<<<<<<<<<<>>>>>>>>>>>>> */}
        <article className='service'>
          <div className='service__head'>
            <h3>Desarrollo Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* <<<<<<<<<<<<>>>>>>>>>>>>> */}
        <article className='service'>
          <div className='service__head'>
            <h3>Creación de contenido</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services