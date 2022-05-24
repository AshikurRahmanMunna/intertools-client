import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { _id, name, img, description, price, moq, availableQuantity, unit } = tool;
  const navigate = useNavigate();
  return (
    <div class="card duration-300 cursor-pointer tool-card card-compact bg-base-100 shadow-xl p-5">
      <figure>
        <div className="overflow-hidden w-full rounded-2xl">
          <img
            className="max-w-full mx-auto duration-300 h-auto rounded-2xl"
            src={img}
            alt={name}
          />
        </div>
      </figure>
      <div class="card-body gap-1">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          Price: BDT{" "}
          <span className="text-primary">
            {price}/{unit}
          </span>
        </p>
        <p>MOQ:{moq}</p>
        <p>
          Available: {availableQuantity}
          {unit}
        </p>
        <div class="card-actions justify-end">
          <button onClick={() => navigate(`/purchase/${_id}`)} class="btn d-block w-full btn-primary text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
