import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () => {
    return axiosPrivate
      .get(`http://localhost:5000/order/${user.email}`)
      .then((res) => res.data);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if(MyOrders.length < 1) {
    return <h2 className="text-3xl mt-12">You haven't ordered any tools yet 😕😕.</h2>
  }
  return (
    <div>
      <h2>My Orders: {myOrders.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Tool</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <OrderRow
                refetch={refetch}
                index={index}
                key={order._id}
                order={order}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
