import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/EEA94/Weather-App",
    demo: "https://weather-app-jet-delta.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Henry Videogames",
    github: "https://github.com/EEA94/PI-Videogames",
    demo: "https://pi-videogames-ten.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Moon Cinema",
    github: "https://github.com/EEA94/Moon-Cinema",
    demo: "https://moon-cinema.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Your Pet",
    github: "https://github.com/EEA94/-PI-Dogs",
    demo: "https://proyecto-dogs.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "ToDo List",
    github: "https://github.com/EEA94/ToDo-App",
    demo: "https://eea94.github.io/ToDo-App/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio",
    github: "https://github.com/EEA94",
    demo: "https://eea94.github.io/portfolio/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {data &&
          data.map((p) => (
            <article className="portfolio__item" key={p.id}>
              <div className="portfolio__item-image">
                <img src={p.image} alt={p.title} />
              </div>
              <h3>{p.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  rel="noopener noreferrer"
                  href={p.github}
                  className="btn"
                  target="_blank"
                >Github
                </a>
                <a
                  rel="noopener noreferrer"
                  href={p.demo}
                  className="btn btn-primary"
                  target="_blank"
                >Deploy
                </a>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
