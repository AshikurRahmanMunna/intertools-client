import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Reviews />
    </>
  );
};

export default Home;
