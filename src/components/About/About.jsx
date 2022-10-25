import React from 'react';
import './about.css';
import aboutMe from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {RiMentalHealthLine} from 'react-icons/ri';
import {BsPersonLinesFill} from 'react-icons/bs';

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
            <small>+ 1 año de experiencia</small>
          </article>

          <article className='about__card'>
            <RiMentalHealthLine className='about_icon'/>
            <h5>Habilidades</h5>
            <small>Mas de 20 (tecnicas y blandas)</small>
          </article>

          <article className='about__card'>
            <BsPersonLinesFill className='about_icon'/>
            <h5>Perfil</h5>
            <small>Frontend-Fullstack</small>
          </article>
        </div>
        <p>&nbsp;&nbsp;Hace un año decidí darle un cambio a mi vida en el ámbito profesional, por ello comencé a adentrarme en el universo de la programación Web y descubrí poco a poco una profesión hermosa y apasionante en la he aprendido mucho en poco tiempo y aun sigo aprendiendo.<br/>
        &nbsp;&nbsp;Me gusta más el área del frontend, soy una persona a la cual le motiva el aprendizaje continuo, el trabajo organizado y construir buenas relaciones personales.<br/>
         &nbsp;&nbsp;Mi experiencia en el área esta basada en su mayoría, en los proyectos realizados en el bootcamp de Henry, con +700 horas de estudio teórico y práctico a través de las cuales pude desarrollar tanto Tech-Skills como Soft-Skills al aprender a superar desafios en equipo.
        </p>
        <a href='#contact' className='btn btn-primary'>Contáctame</a>
      </div>
      </div>
    </section>
  )
}

export default About