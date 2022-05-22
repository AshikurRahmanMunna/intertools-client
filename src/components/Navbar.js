import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [white, setWhite] = useState(false);
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <Link to="/#tools">Tools</Link>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  const changeNavbarColor = () => {
    if(window.scrollY > 150) {
      setWhite(true)
    }
    else {
      setWhite(false);
    }
  }
  window.addEventListener('scroll', changeNavbarColor);
  console.log(white);
  return (
    <div class={`navbar bg-base-100 fixed duration-500 top-0 ${white ? 'bg-white text-black' : 'bg-transparent text-white'} z-10`}>
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
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Intertools</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
