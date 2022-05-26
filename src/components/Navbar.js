import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink, useLocation } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [white, setWhite] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  const { data: admin, isLoading } = useQuery("admin", () => {
    return axiosPrivate
      .get(`http://localhost:5000/admin/${user.email}`)
      .then((res) => res.data.isAdmin);
  });
  const changeNavbarColor = () => {
    if (location.pathname === "/") {
      if (window.scrollY > 150) {
        setWhite(true);
      } else {
        setWhite(false);
      }
    } else {
      setWhite(true);
    }
  };
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  }, [location]);
  window.addEventListener("scroll", changeNavbarColor);
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <Link to="/#tools">Tools</Link>
      </li>
      {user && (
        <li>
          <NavLink to={admin ? "/dashboard/manageOrders" : '/dashboard/myOrders'}>Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <button
          onClick={() => {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }}
          className="btn btn-secondary"
        >
          Sign Out
        </button>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      class={`navbar z-50 bg-base-100 ${
        hideNavbar && "hidden"
      } fixed duration-500 top-0 ${
        white ? "bg-white text-black" : "bg-transparent text-white"
      } z-10`}
    >
      <div className="container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case font-lobster text-3xl">
            Inter<span className="text-primary font-lobster">tools</span>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 gap-5">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
