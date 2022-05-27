import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1ngZB7Dfi71X8eRg3mCipiQ0T6Xuw1INI5jkT394fN3UCX3WNwpIgAr7cgGpIZIHoH5IyAtG6xMcPGuTOrMgeb0052UEX4a7"
);

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
  const { name, price, quantity, description, unit } = tool;
  return (
    <div className="flex min-h-screen items-center justify-center gap-5">
      <div class="card w-96 bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Quantity: {quantity}{unit}</p>
          <p>
            Price: {price}/{unit}
          </p>
          <p>To Pay: {price * quantity}</p>
        </div>
      </div>
        <div class="card mt-4 w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm tool={tool} />
            </Elements>
          </div>
        </div>
    </div>
  );
};

export default Payment;
