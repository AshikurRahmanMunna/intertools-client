import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../api/axiosPrivate";
import Loading from "../../components/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () => {
    return axiosPrivate
      .get("http://localhost:5000/user")
      .then((res) => res.data);
  });
  if(isLoading) {
      return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">
        Make A User <span className="text-primary">Admin</span>
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) => <MakeAdminRow key={user._id} refetch={refetch} index={index} user={user}></MakeAdminRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
