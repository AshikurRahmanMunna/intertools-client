import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Review.css";

const Review = ({ review, spacing }) => {
  const { name, img, desc, rating } = review;
  return (
    <div className={`review-card ${spacing}`}>
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img src={img} alt={name} />
        </div>
      </div>
      <h4 className="text-2xl mb-2">{name}</h4>
      <p>
        <small>{desc}</small>
      </p>
      {/* rating by react rating */}
      <Rating
        initialRating={rating}
        emptySymbol={
          <FontAwesomeIcon style={{ color: "lightgray" }} icon={faStar} />
        }
        fullSymbol={
          <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
        }
        readonly
      />
    </div>
  );
};

export default Review;
