import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UserLayout } from "../pages";

const PrivateRoute = ({ component, title, ...rest }) => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   return <Route {...rest} render={(props) => (user ? <UserLayout Component={component} title={title} {...props} /> : <Redirect to={"/login"} />)} />;
  return <Route {...rest} render={(props) => <UserLayout Component={component} title={title} {...props} />} />;
};

export default PrivateRoute;
