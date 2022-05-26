import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";

const ManageProductsDeleteConfirm = ({deletingTool, refetch}) => {
  const {name, _id} = deletingTool;
  const handleDelete = () => {
    axiosPrivate.delete(`https://afternoon-journey-16786.herokuapp.com/tools/${_id}`)
    .then(res => {
      if(res.data.acknowledged === true) {
        toast.success("Tool deleted successfully", {
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
      }
      else {
        toast.success("Something Went Wrong", {
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
    })
  }
  return (
    <div>
      <input type="checkbox" id="manage-products-delete-confirm-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box z-50 relative">
          <label
            for="manage-products-delete-confirm-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Do you really want to Delete Tool: {name}
          </h3>
          <p class="py-4">
            This can't be undone.
          </p>
          <div className="modal-action">
            <button onClick={handleDelete} className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsDeleteConfirm;