import React from 'react';
import './services.css';
import {BsCheck} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>Que puedo ofrecer</h5>
      <h2>Servicios</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Backend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Creación de bases de datos SQL con sus tablas.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Creación de un servidor en NodeJs con Express y conexión a base de datos.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Consumo de APIs de terceros.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Autenticacion de usuarios.</p>
            </li>
          </ul>
        </article>

        {/* <<<<<<<<<<<<>>>>>>>>>>>>> */}
        <article className='service'>
          <div className='service__head'>
            <h3>Frontend</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Realización de prototipos básicos de la aplicacion web que se va a desarrollar.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Creación de rutas de la aplicación web mediante React-router o usando Nextjs.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Formularios controlados con javascript o librerias como Formik.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Sistema de Login y Registro conectado con el backend.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Creación de una interface de administrador para la manipulación de la base de datos (ver, borrar, agregar, actualizar).</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Diseño responsive con css puro o librerias como bootstrap.</p>
            </li>
          </ul>
        </article>

        {/* <<<<<<<<<<<<>>>>>>>>>>>>> */}
        <article className='service'>
          <div className='service__head'>
            <h3>Otros</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Trabajo con metodologia ágiles (SCRUM).</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Creacion de diseños básicos con ilustrator.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/> 
              <p>Organización de tareas a cumplir con herramientas como Trello.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services