
import React, { useEffect } from "react";
import RouteConstants from "./RoutesConstants";
import { Routes,Route} from "react-router-dom";


import {useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store";


import MyDashboard from "../containers/MyDashboard";
import AdminDashboard from "../containers/AdminDashboard";
import Layout from "../containers/Layout";


import { getOneuser } from "../store/user/actions";
import { getLoanByUserId } from "../store/loan/actions";
import { getCreditScoreByUserId } from "../store/creditScore/actions";
const AppRoutes = () => {

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;

    const userId = user ? user.id : null;
    useEffect(() => {
      if(user){
        if (userId) {
          dispatch(getOneuser(userId));
        }
      }
    });

    useEffect( () => {
      if(user){
        if (userId) {
          dispatch(getLoanByUserId(userId));
        }
      }
    }
    );

    useEffect( () => {
      if(user){
        if (userId) {
          dispatch(getCreditScoreByUserId(userId));
        }
      }
    });

    if (user && user.is_admin) {
      navigate(RouteConstants.ADMIN);
    }else{
      navigate(RouteConstants.HOME);
    }


    return (
       <Layout>
              <Routes>
                <Route path={RouteConstants.HOME} element={<MyDashboard />} />
                <Route path={RouteConstants.ADMIN} element={<AdminDashboard />} />
              </Routes>
       </Layout>
    );

}

export default AppRoutes;