import React from "react";
import { Route } from "react-router-dom";
import { TeacherLayout } from "../pages";

const TeacherRoute = ({ component, ...rest }) => {
  return <Route {...rest} render={(props) => <TeacherLayout Component={component} {...props} />} />;
};

export default TeacherRoute;
