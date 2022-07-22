/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/background1.png";
import Image2 from "../../assets/background2.png";
import Image3 from "../../assets/background3.jpg";
import Image4 from "../../assets/background4.png";
import Image5 from "../../assets/background5.png";
import Image6 from "../../assets/background6.png";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Lambroghini Avendadoe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 2,
    image: Image2,
    title: "Mclaren 720s",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 3,
    image: Image3,
    title: "Buggati Chiron",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 4,
    image: Image4,
    title: "Mercedes Benz AMG",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 5,
    image: Image5,
    title: "Ferrari",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
  {
    id: 6,
    image: Image6,
    title: "Aston Martin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reprehenderit veniam laudantium ullam quod, suscipit obcaecati ipsa error voluptatem sunt consequuntur illum quis reiciendis. Quidem at a eum saepe corrupti.",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <h1>
          <span>portfolio</span>me
        </h1>
      </div>
      <Swiper
        className="portfolio-item"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide key={id} className="portfolio-content">
              <div className="portfolio-image">
                <img src={image} alt="Portfolio Image" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
