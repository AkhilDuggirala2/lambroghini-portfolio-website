import React from "react";
import "./testimonial.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";
import Avatar5 from "../../assets/avatar5.jpg";
import Avatar6 from "../../assets/avatar6.jpg";

import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    avatar: Avatar1,
    name: "Driver",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto animi nemo libero sapiente amet a quaerat alias, eos soluta.",
  },
  {
    avatar: Avatar2,
    name: "Driver",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto animi nemo libero sapiente amet a quaerat alias, eos soluta.",
  },
  {
    avatar: Avatar3,
    name: "Driver",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto animi nemo libero sapiente amet a quaerat alias, eos soluta.",
  },
  {
    avatar: Avatar4,
    name: "Driver",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto animi nemo libero sapiente amet a quaerat alias, eos soluta.",
  },
  {
    avatar: Avatar5,
    name: "Driver",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto animi nemo libero sapiente amet a quaerat alias, eos soluta.",
  },
  {
    avatar: Avatar6,
    name: "Driver",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto animi nemo libero sapiente amet a quaerat alias, eos soluta.",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="testimonial-container">
        <h1>
          <span>testimonial</span>me
        </h1>
      </div>
      <Swiper
        className="testimonial-me"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial-content">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
