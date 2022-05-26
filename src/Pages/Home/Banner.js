import React from "react";
import { Parallax } from "react-parallax";
import "./Banner.css";
import bannerImg from "../../assets/images/banner-img.jpg";

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
            data-aos="fade-left"
            data-aos-delay="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            src={bannerImg}
            style={{ width: "300px" }}
            class="max-w-full h-auto rounded-lg shadow-2xl"
            alt="hero"
          />
          <div>
            <h1
              class="text-4xl font-bold lg:leading-3"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              The Machinery Master -{" "}
              <span className="text-primary">Intertools</span>
            </h1>
            <p
              class="py-6 lg:w-3/5"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="700"
              data-aos-once="true"
            >
              s We are the most leading machinery manufacturer in the world.
              When we started, we dreamt about to make our industry the most
              trusted industry ever. We are on the way!
            </p>
            <button
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-duration="600"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
