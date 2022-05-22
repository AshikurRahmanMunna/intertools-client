import React from "react";
import { Parallax } from "react-parallax";
import './Banner.css';
import bannerImg from '../../assets/images/banner-img.jpg';

const Banner = () => {
  return (
    <Parallax
      bgImage={require("../../assets/images/banner-bg.jpg")}
      className="bg-no-repeat bg-cover bg-center home-banner flex justify-center items-center"
      bgImageAlt="the dog"
    >
      <div class="hero text-white my-10 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            style={{width: '300px'}}
            class="max-w-full h-auto rounded-lg shadow-2xl"
            alt="hero"
          />
          <div>
            <h1 class="text-4xl font-bold leading-3">
              The Machinery Master - <span className="text-primary">Intertools</span>
            </h1>
            <p class="py-6 w-3/5">
              We are the most leading machinery manufacturer in the world. When we started, we dreamt about to make our industry the most trusted industry ever. We are on the way!
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
