import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>👋🏽Hola!, mi nombre es</h5>
        <h1>Elías Andrada</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="foto de mi" />
        </div>

        <a href="#contact" className="scroll__down">
          Desplazar hacia abajo
        </a>
      </div>
    </header>
  );
};

export default Header;
