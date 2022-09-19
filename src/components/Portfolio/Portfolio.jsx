import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "App Weather",
    github: "https://github.com/EEA94",
    demo: "https://appweather.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Henry Videogames",
    github: "https://github.com/EEA94",
    demo: "https://hvideogames.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Moon Cinema",
    github: "https://github.com/EEA94",
    demo: "https://hvideogames.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Your Pet",
    github: "https://github.com/EEA94",
    demo: "https://yourpet.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "ToDo List",
    github: "https://github.com/EEA94",
    demo: "https://todolist.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "proximamente",
    github: "https://github.com/EEA94",
    demo: "https://proxproyecto.com",
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
                  href={p.github}
                  className="btn"
                  target="_blank"
                >Github
                </a>
                <a
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
