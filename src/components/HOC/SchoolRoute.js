import React from "react";
import { Route } from "react-router-dom";
import { StudentLayout } from "../pages";

const SchoolRoute = ({ component, ...rest }) => {
  return <Route {...rest} render={(props) => <StudentLayout Component={component} {...props} />} />;
};

export default SchoolRoute;
