import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";

const Payment = () => {
  const { id } = useParams();
  const { data: tool, isLoading } = useQuery("payment", () =>
    axiosPrivate
      .get(`https://afternoon-journey-16786.herokuapp.com/orderById/${id}`)
      .then((res) => res.data)
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, price, quantity, description } = tool;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
