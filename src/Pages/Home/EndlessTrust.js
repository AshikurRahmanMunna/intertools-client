import React from "react";
import trust from "../../assets/images/trust.jpg";

const EndlessTrust = () => {
  return (
    <div className="container mx-auto">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <div className="w-50">
            <img src={trust} class="w-full h-auto rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="w-50">
            <h1 class="text-5xl font-bold">Endless Trust</h1>
            <p class="py-6">
              Our People trusts our service because we serve them an extra ordinary service. We server our best to the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndlessTrust;
