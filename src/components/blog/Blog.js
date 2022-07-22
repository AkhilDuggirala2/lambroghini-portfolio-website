/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./blog.css";
import Img1 from "../../assets/blog1.png";
import Img2 from "../../assets/blog2.png";
import Img3 from "../../assets/blog3.png";

const Blog = () => {
  return (
    <div id="blog">
      <div className="blog-container">
        <h1>
          <span>Blog</span>me
        </h1>
      </div>
      <div className="blog-me">
        <div className="blog-image">
          <img src={Img1} alt="Blog Image" />
          <h3>Lambroghini Urus</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            sequi reiciendis eaque, pariatur consequatur quos. Delectus,
            repudiandae cupiditate molestiae fugiat, autem quasi consequuntur
            aliquam exercitationem, nesciunt ducimus deserunt culpa eligendi.
          </p>
        </div>
        <div className="blog-image-1">
          <img src={Img2} alt="Blog Image" />
          <h3>Pagani Huayra</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            sequi reiciendis eaque, pariatur consequatur quos. Delectus,
            repudiandae cupiditate molestiae fugiat, autem quasi consequuntur
            aliquam exercitationem, nesciunt ducimus deserunt culpa eligendi.
          </p>
        </div>
        <div className="blog-image-2">
          <img src={Img3} alt="Blog Image" />
          <h3>Koenigsegg</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            sequi reiciendis eaque, pariatur consequatur quos. Delectus,
            repudiandae cupiditate molestiae fugiat, autem quasi consequuntur
            aliquam exercitationem, nesciunt ducimus deserunt culpa eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
