import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DashboardIndex = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h2 className="text-4xl text-center">
          Welcome To <span className="text-primary">Dashboard</span>
        </h2>
        <p className="text-center"><FontAwesomeIcon className="text-primary" icon={faArrowLeft} /> Dashboard menus are available in left</p>
      </div>
    </div>
  );
};

export default DashboardIndex;
