import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import banner from "../../assets/images/login-banner.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen mx-auto container flex items-center justify-center">
      <div className="bg-secondary w-[800px] p-10 rounded-2xl flex items-center justify-center py-16">
        <div className="flex-1">
          <img className="mx-auto" src={banner} alt="login" />
        </div>
        <div className="w-full flex-1 ml-5">
          <div className="text-center mb-3">
            <Link to="/" class="normal-case brand text-5xl">
              Inter<span className="text-primary brand">tools</span>
            </Link>
            <h3 className="text-3xl">Login</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Email"
              type="email"
              class="input w-full block mb-3"
              {...register("email", { pattern: /^[A-Za-z]+$/i })}
            />
            <input
              placeholder="Password"
              class="input w-full block mb-3"
              type="password"
              {...register("password", { min: 18, max: 99 })}
            />
            <button
              class="input w-full max-w-xs block mb-3"
              type="submit"
              className="btn block w-full btn-primary text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
