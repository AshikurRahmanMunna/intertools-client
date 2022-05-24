import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const Purchase = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery("tool", () =>
    axios.get(`http://localhost:5000/tools/${id}`).then((res) => res.data)
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
