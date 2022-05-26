import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    axiosPrivate
      .get(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.data)
  );
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  const { education, location, phone, linkedin, addedInfo } = userProfile;
  const handleUpdateInfo = (data, event) => {
    const newData = { addedInfo: true, ...data };
    axiosPrivate
      .put(`http://localhost:5000/updateUser/${user.email}`, newData)
      .then((res) => {
        if (res.data.acknowledged === true) {
          refetch();
          toast.success("Info Updated Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          event.target.reset();
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
    <div>
      <h2 className="text-4xl">
        User <span className="text-primary">Profile</span>
      </h2>
      <div className="mt-4">
        <div className="bg-secondary rounded-2xl p-10">
          <h4 className="text-2xl">
            <span className="text-primary">Name</span>: {user.displayName}
          </h4>
          <h6 className="text-md">Email: {user.email}</h6>
        </div>
        {addedInfo === true ? (
          <div>
            <div className="bg-secondary p-10 rounded-2xl mt-5">
              <p>
                <span className="text-primary">Education</span>:{" "}
                {education ? (
                  education
                ) : (
                  <span className="text-red-500">Not Available</span>
                )}
              </p>
              <p>
                <span className="text-primary">Location</span>:{" "}
                {location ? (
                  location
                ) : (
                  <span className="text-red-500">Not Available</span>
                )}
              </p>
              <p>
                <span className="text-primary">Phone Number</span>:{" "}
                {phone ? (
                  phone
                ) : (
                  <span className="text-red-500">Not Available</span>
                )}
              </p>
              <p>
                <span className="text-primary">LinkedIn Profile</span>:{" "}
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href={linkedin ? linkedin : "#"}
                  className={linkedin ? "underline" : ""}
                >
                  {linkedin ? (
                    linkedin
                  ) : (
                    <span className="text-red-500">Not Available</span>
                  )}
                </a>
              </p>
            </div>
            <div className="bg-secondary p-10 rounded-2xl mt-5">
              <h2 className="text-4xl mb-4">
                Update your <span className="text-primary">profile</span>
              </h2>
              <form
                autoComplete="off"
                onSubmit={handleSubmit(handleUpdateInfo)}
              >
                <input
                  placeholder="Education"
                  type="text"
                  class="input w-full block mb-3"
                  {...register("education")}
                />
                <input
                  placeholder="Location"
                  type="text"
                  class="input w-full block mb-3"
                  {...register("location")}
                />
                <input
                  placeholder="Phone Number"
                  type="tel"
                  class="input w-full block mb-3"
                  {...register("phone")}
                />
                <input
                  placeholder="LinkedIn Profile"
                  class="input w-full block mb-3"
                  type="url"
                  {...register("linkedin")}
                />
                <input
                  class="input w-full max-w-xs block mb-3"
                  type="submit"
                  className="btn block w-full btn-primary text-white"
                  value="Update Profile"
                />
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-secondary p-10 rounded-2xl mt-5">
            <h2 className="text-4xl mb-4">
              Complete your <span className="text-primary">profile</span>
            </h2>
            <form autoComplete="off" onSubmit={handleSubmit(handleUpdateInfo)}>
              <input
                placeholder="Education"
                type="text"
                class="input w-full block mb-3"
                {...register("education")}
              />
              {/* <label className="label pt-0 -mt-2 pb-3">
              <span className="label-text-alt text-red-500">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Please provide a valid email"}
              </span>
            </label> */}
              <input
                placeholder="Location"
                type="text"
                class="input w-full block mb-3"
                {...register("location")}
              />
              <input
                placeholder="Phone Number"
                type="tel"
                class="input w-full block mb-3"
                {...register("phone")}
              />
              <input
                placeholder="LinkedIn Profile"
                class="input w-full block mb-3"
                type="url"
                {...register("linkedin")}
              />
              <input
                class="input w-full max-w-xs block mb-3"
                type="submit"
                className="btn block w-full btn-primary text-white"
                value="Update Profile"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
