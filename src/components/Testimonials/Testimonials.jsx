import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Midu dev",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse neque libero aliquam voluptates, at numquam, laudantium maxime accusamus architecto, ullam expedita culpa rerum cupiditate! Ad exercitationem eius voluptas deserunt.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "John Mircha",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse neque libero aliquam voluptates, at numquam, laudantium maxime accusamus architecto, ullam expedita culpa rerum cupiditate! Ad exercitationem eius voluptas deserunt.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Carlos Azaustre",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse neque libero aliquam voluptates, at numquam, laudantium maxime accusamus architecto, ullam expedita culpa rerum cupiditate! Ad exercitationem eius voluptas deserunt.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Moure dev",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore esse neque libero aliquam voluptates, at numquam, laudantium maxime accusamus architecto, ullam expedita culpa rerum cupiditate! Ad exercitationem eius voluptas deserunt.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reseñas de otros devs</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data &&
          data.map((t) => {
            return (
              <SwiperSlide className="testimonial" key={t.id}>
                <div className="client__avatar">
                  <img src={t.avatar} alt={t.name}/>
                </div>
                <h5>{t.name}</h5>
                <small className="client__review">{t.review}</small>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
