// HOC
// import PrivateRoute from "../HOC/PrivateRoute";
import PublicRoute from "../HOC/PublicRoute";
import StudentRoute from "../HOC/StudentRoute";
import TeacherRoute from "../HOC/TeacherRoute";
import DistrictRoute from "../HOC/DistrictRoute";
import SchoolRoute from "../HOC/SchoolRoute";

import Home from "./Homepage/Home";
import About from "./Homepage/About";

import Signup from "./AuthForms/Signup";
import Login from "./AuthForms/Login";
import StudentSignup from "./AuthForms/StudentSignup";

// ADMIN
// import UserLayout from "./Dashboard/UserLayout";
// import Overview from "./Dashboard/Overview";
// import StaffReports from "./Dashboard/StaffReports";
// import NationalView from "./Dashboard/NationalView";
// import TrainingStatus from "./Dashboard/TrainingStatus";
// import Infographics from "./Dashboard/Infographics";

// DISTRICT
import DistrictLayout from "./Dashboard/District/DistrictLayout";
import DistrictOverview from "./Dashboard/District/DistrictOverview";
import DistrictSchoolRankings from "./Dashboard/District/DistrictSchoolRankings";
import DistrictVisualizations from "./Dashboard/District/DistrictVisualizations";
import DistrictFunds from "./Dashboard/District/DistrictFunds";
import DistrictPolicies from "./Dashboard/District/DistrictPolicies";
import DistrictMapView from "./Dashboard/District/DistrictMapView";

// STUDENT
import StudentLayout from "./Dashboard/Student/StudentLayout";
import StudentFeedback from "./Dashboard/Student/StudentFeedback";
import StudentSuggestions from "./Dashboard/Student/StudentSuggestions";
import PolicyReviews from "./Dashboard/Student/PolicyReviews";
import StudentNews from "./Dashboard/Student/StudentNews";

// TEACHER
import TeacherLayout from "./Dashboard/Teacher/TeacherLayout";
import TeacherOverview from "./Dashboard/Teacher/TeacherOverview";
import TeacherFeedback from "./Dashboard/Teacher/TeacherFeedback";
import TeacherStudentDashboard from "./Dashboard/Teacher/TeacherStudentDashboard";
import TeacherPredictions from "./Dashboard/Teacher/TeacherPredictions";
import TeacherAddDetails from "./Dashboard/Teacher/TeacherAddDetails/TeacherAddDetails";

// SCHOOL STAFF
import SchoolLayout from "./Dashboard/School/SchoolLayout";
import SchoolOverview from "./Dashboard/School/SchoolOverview";
import SchoolReports from "./Dashboard/District/SchoolReports/SchoolReports";
import SendReports from "./Dashboard/School/SendReports";
import ReviewFeedbacks from "./Dashboard/School/ReviewFeedbacks";
import SchoolRequirements from "./Dashboard/School/SchoolRequirements";
import SchoolVisualization from "./Dashboard/School/SchoolVisualization";

import Page404 from "./Page404";

export {
  Home,
  About,
  Signup,
  Page404,
  Login,
  // UserLayout,
  // Overview,
  // StaffReports,
  // SendReports,
  // TrainingStatus,
  // NationalView,
  // Infographics,
  // PrivateRoute,
  PublicRoute,
  StudentRoute,
  TeacherRoute,
  SchoolRoute,
  DistrictRoute,
  StudentLayout,
  TeacherLayout,
  SchoolLayout,
  DistrictLayout,
  StudentSignup,
  StudentSuggestions,
  PolicyReviews,
  StudentNews,
  StudentFeedback,
  TeacherOverview,
  TeacherFeedback,
  TeacherPredictions,
  TeacherStudentDashboard,
  TeacherAddDetails,
  DistrictOverview,
  DistrictSchoolRankings,
  DistrictVisualizations,
  DistrictFunds,
  DistrictPolicies,
  DistrictMapView,
  SchoolOverview,
  SchoolReports,
  SendReports,
  ReviewFeedbacks,
  SchoolRequirements,
  SchoolVisualization,
};
