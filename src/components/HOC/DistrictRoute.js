import React from "react";
import { Route } from "react-router-dom";
import { DistrictLayout } from "../pages";

const DistrictRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => <DistrictLayout Component={component} {...props} />}
    />
  );
};

export default DistrictRoute;
