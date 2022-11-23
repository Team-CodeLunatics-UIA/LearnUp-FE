import React from "react";
import { Route } from "react-router-dom";
import { SchoolLayout } from "../pages";

const SchoolRoute = ({ component, ...rest }) => {
  return <Route {...rest} render={(props) => <SchoolLayout Component={component} {...props} />} />;
};

export default SchoolRoute;
