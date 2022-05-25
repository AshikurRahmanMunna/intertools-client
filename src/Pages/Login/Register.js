import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from "../../assets/images/login-banner.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";
import useToken from "../../hooks/useToken";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-600">{error?.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  const handleRegister = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="min-h-screen mx-auto container flex items-center justify-center">
      <div className="bg-secondary w-[1050px] p-10 rounded-2xl flex items-center justify-center py-16">
        <div className="flex-1">
          <img className="mx-auto" src={banner} alt="login" />
        </div>
        <div className="w-full flex-1 ml-5">
          <div className="text-center mb-3">
            <Link to="/" class="normal-case font-lobster text-5xl">
              Inter<span className="text-primary font-lobster">tools</span>
            </Link>
            <h3 className="text-3xl">Register</h3>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <input
              placeholder="Name"
              class="input w-full block mb-3"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label pt-0 -mt-2 pb-3">
              <span className="label-text-alt text-red-500">
                {errors.name?.type === "required" && "Name is required"}
              </span>
            </label>
            <input
              placeholder="Email"
              class="input w-full block mb-3"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please provide a valid email",
                },
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <label className="label pt-0 -mt-2 pb-3">
              <span className="label-text-alt text-red-500">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Please provide a valid email"}
              </span>
            </label>
            <input
              placeholder="Password"
              class="input w-full block mb-3"
              type="password"
              {...register("password", {
                min: {
                  value: true,
                  message: "Password must be at least 6 characters or long",
                },
              })}
            />
            <label className="label pt-0 -mt-2 pb-3">
              <span className="label-text-alt text-red-500">
                {errors.email?.type === "required" && "Password is required"}
                {errors.email?.type === "min" &&
                  "Password must be 6 character or longer"}
              </span>
            </label>
            <input
              class="input w-full max-w-xs block mb-3"
              type="submit"
              className="btn block w-full btn-primary text-white"
              value="Register"
            />
          </form>
          {errorElement}
          <p className="pt-3">
            Don't have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
