// HOC
import PrivateRoute from "../HOC/PrivateRoute";
import PublicRoute from "../HOC/PublicRoute";

import Home from "./Homepage/Home";
import About from "./Homepage/About";

import Signup from "./AuthForms/Signup";
import Login from "./AuthForms/Login";
import StudentSignup from "./AuthForms/StudentSignup";

// ADMIN
import UserLayout from "./Dashboard/UserLayout";
import Overview from "./Dashboard/Overview";
import StaffReports from "./Dashboard/StaffReports";
import NationalView from "./Dashboard/NationalView";
import TrainingStatus from "./Dashboard/TrainingStatus";
import Infographics from "./Dashboard/Infographics";

// STUDENT
import StudentFeedback from "./Dashboard/Student/StudentFeedback";
import Improvements from "./Dashboard/Student/Improvements";

// STAFF
import SendReports from "./Dashboard/SendReports";

import Page404 from "./Page404";

export {
  PrivateRoute,
  PublicRoute,
  Home,
  About,
  Signup,
  Page404,
  Login,
  UserLayout,
  Overview,
  StaffReports,
  TrainingStatus,
  NationalView,
  Infographics,
  StudentSignup,
  StudentFeedback,
  Improvements,
  SendReports,
};
