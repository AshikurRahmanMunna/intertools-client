import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate, useLocation } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";
import Loading from "./Loading";

const RequireUserOnly = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    const {data: admin, isLoading} = useQuery('admin', () => {
        return axiosPrivate.get(`http://localhost:5000/admin/${user.email}`)
        .then(res => res.data.isAdmin);
    })
    
    if(loading || isLoading){
        return <Loading></Loading>
    }

    if(admin){
        signOut(auth);
        localStorage.removeItem('accessToken');
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireUserOnly;