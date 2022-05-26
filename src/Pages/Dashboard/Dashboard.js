import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, NavLink, Outlet } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const { data: admin, isLoading } = useQuery("admin", () => {
    return axiosPrivate
      .get(`http://localhost:5000/admin/${user.email}`)
      .then((res) => res.data.isAdmin);
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="drawer drawer-mobile mt-[64px]">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/myProfile">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">Manage Products</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addReview">Add Review</Link>
              </li>
              <li>
                <Link to="/dashboard/myProfile">My Profile</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
