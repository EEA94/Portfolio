import React from 'react';
import './about.css';
import aboutMe from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce más...</h5>
      <h2>Acerca de mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={aboutMe} alt='acerca de mi, imagen'/>
          </div>
        </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about_icon'/>
            <h5>Experiencia</h5>
            <small>Un año de experiencia</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about_icon'/>
            <h5>Clientes</h5>
            <small>Mas de 200 en todo el mundo</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Proyectos</h5>
            <small>Mas de 50 terminados</small>
          </article>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio beatae asperiores rem eligendi! Nihil ullam, veniam reprehenderit cum corporis mollitia a, totam libero assumenda atque officiis quaerat est possimus.
        </p>

        <a href='#contact' className='btn btn-primary'>Contáctame</a>
      </div>
      </div>
    </section>
  )
}

export default About