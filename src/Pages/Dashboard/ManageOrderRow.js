import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";

const ManageOrderRow = ({ order, index, refetch }) => {
  const { _id, name, userName, price, quantity, status, isPaid } = order;
  const setAsShipped = () => {
    axiosPrivate
      .put(`https://afternoon-journey-16786.herokuapp.com/order/${_id}`, {
        status: 'shipped'
      })
      .then((res) => {
        if (res.data.acknowledged === true) {
          toast.success("Order Shipped Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        } else {
          toast.error("Something Went Wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{userName}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        {isPaid ? (
          <p className="text-red-500">Unpaid</p>
        ) : (
          <>
            {status === "pending" ? (
              <div className="flex items-center">
                <p className="mr-2">Pending</p>
                <button onClick={setAsShipped} className="btn btn-primary">Set As Shipped</button>
              </div>
            ) : (
              <p className="text-green-500">Shipped</p>
            )}
          </>
        )}
      </td>
    </tr>
  );
};

export default ManageOrderRow;
