import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experiencie/Experiencie'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </>
  )
}

export default App