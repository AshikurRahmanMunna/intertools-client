import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import banner from "../../assets/images/login-banner.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    const {email, password} = data;
    
  };
  return (
    <div className="min-h-screen mx-auto container flex items-center justify-center">
      <div className="bg-secondary w-[800px] p-10 rounded-2xl flex items-center justify-center py-16">
        <div className="flex-1">
          <img className="mx-auto" src={banner} alt="login" />
        </div>
        <div className="w-full flex-1 ml-5">
          <div className="text-center mb-3">
            <Link to="/" class="normal-case font-lobster text-5xl">
              Inter<span className="text-primary font-lobster">tools</span>
            </Link>
            <h3 className="text-3xl">Login</h3>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
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
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
