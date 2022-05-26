import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const AddProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgBbKey = '9a2202cf2bf1f5f03a334ea153d39406';

  const handleAddProduct = async (data) => {
    console.log(data)
    const img = data.img[0];
    const formData = new FormData();
    formData.append("img", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgBbKey}`;
    axios.post(url, formData)
      .then((result) => {
        if (result.data.success) {
          const img = result.data.url;
          const tool = {
            name: data.name,
            img: img,
            description: data.description,
            price: parseInt(data.price),
            moq: parseInt(data.moq),
            unit: data.unit,
            availableQuantity: parseInt(data.availableQuantity),
            addedBy: user.email
          };
          axiosPrivate.post('http://localhost:5000/tools', tool)
            .then((data) => {
              if (data.insertedId) {
                toast.success("Order placed successfully", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              } else {
                toast.success("Something Wen't wrong", {
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
        }
      });
  };
  return (
    <div className="bg-secondary p-10 rounded-2xl mt-5">
      <h2 className="text-4xl text-center mb-4">
        Add <span className="text-primary">product</span>
      </h2>
      <form
        autoComplete="off"
        className="w-3/4 mx-auto"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <input
          placeholder="Name"
          type="text"
          class="input w-full block mb-3"
          {...register("name", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
        />
        <input
          type="file"
          class="input w-full block mb-3"
          {...register("img", {
            required: {
              value: true,
              message: "Image is Required",
            },
          })}
        />
        <textarea
          placeholder="Short Description"
          type="text"
          class="input w-full block mb-3"
          {...register("description", {
            required: {
              value: true,
              message: "Short Description is Required",
            },
          })}
        />
        <input
          placeholder="Price"
          class="input w-full block mb-3"
          type="number"
          {...register("price", {
            required: {
              value: true,
              message: "Price is Required",
            },
          })}
        />
        <input
          placeholder="MOQ(Minimum Order Quantity)"
          class="input w-full block mb-3"
          type="number"
          {...register("moq", {
            required: {
              value: true,
              message: "MOQ is Required",
            },
          })}
        />
        <select
          placeholder="Unit"
          class="input w-full block mb-3"
          type="text"
          {...register("unit", {
            required: {
              value: true,
              message: "Unit is Required",
            },
          })}
        >
          <option value="pcs">pcs</option>
          <option value="kg">kg</option>
          <option value="ltr">ltr</option>
          <option value="gram">gram</option>
          <option value="Ton">Ton</option>
        </select>
        <input
          placeholder="Quantity"
          class="input w-full block mb-3"
          type="number"
          {...register("availableQuantity", {
            required: {
              value: true,
              message: "Quantity is Required",
            },
          })}
        />
        <input
          class="input w-full max-w-xs block mb-3"
          type="submit"
          className="btn block w-full btn-primary text-white"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
