import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from "../../assets/images/login-banner.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";
import useToken from "../../hooks/useToken";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [socialLoginError, setSocialLoginError] = useState();
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
  const handleLogin = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
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
              value="Login"
            />
          </form>
          {errorElement}
          <p className="text-red-500">{socialLoginError}</p>
          <p className="pt-3">
            Already have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
          <SocialLogin setSocialLoginError={setSocialLoginError}></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
