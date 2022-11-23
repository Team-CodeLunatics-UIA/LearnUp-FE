import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  PrivateRoute,
  PublicRoute,
  StudentSignup,
  DistrictRoute,
  SchoolRoute,
  TeacherRoute,
  StudentRoute,
  Home,
  About,
  Signup,
  Page404,
  Login,
  StudentNews,
  PolicyReviews,
  StudentFeedback,
  StudentSuggestions,
  TeacherOverview,
  TeacherFeedback,
  TeacherStudentDashboard,
  TeacherPredictions,
  DistrictOverview,
  DistrictSchoolRankings,
  DistrictVisualizations,
  DistrictFunds,
  DistrictPolicies,
  SchoolReports,
  SchoolOverview,
  SendReports,
  ReviewFeedbacks,
  SchoolRequirements,
  // Overview,
  // StaffReports,
  // NationalView,
  // TrainingStatus,
  // Infographics,
  // SendReports,
} from "./components/pages";

import AuthState from "./context/auth/authState";
import setAuthToken from "./Utils/SetAuthToken";

// if (localStorage.getItem("token")) {
//   setAuthToken(localStorage.token);
// }

function App() {
  return (
    <div className="App">
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <PublicRoute exact path="/school/signup" component={StudentSignup} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />

            {/* DISTRICT */}
            <DistrictRoute exact path="/district/overview" component={DistrictOverview} />
            <DistrictRoute
              exact
              path="/district/school-rankings"
              component={DistrictSchoolRankings}
            />
            <DistrictRoute exact path="/district/reports" component={SchoolReports} />
            <DistrictRoute exact path="/district/funds" component={DistrictFunds} />
            <DistrictRoute exact path="/district/policies" component={DistrictPolicies} />
            <DistrictRoute
              exact
              path="/district/visualizations"
              component={DistrictVisualizations}
            />

            {/* SCHOOL */}
            <SchoolRoute exact path="/school/overview" component={SchoolOverview} />
            <SchoolRoute exact path="/school/create" component={SendReports} />
            <SchoolRoute exact path="/school/feedbacks" component={ReviewFeedbacks} />
            <SchoolRoute exact path="/school/requirements" component={SchoolRequirements} />

            {/* STUDENT */}
            <StudentRoute exact path="/student/news" component={StudentNews} />
            <StudentRoute exact path="/student/policy" component={PolicyReviews} />
            <StudentRoute exact path="/student/feedback" component={StudentFeedback} />
            <StudentRoute exact path="/student/suggestions" component={StudentSuggestions} />

            {/* TEACHER */}
            <TeacherRoute exact path="/teacher/overview" component={TeacherOverview} />
            <TeacherRoute exact path="/teacher/feedback" component={TeacherFeedback} />
            <TeacherRoute
              exact
              path="/teacher/student-dashboard"
              component={TeacherStudentDashboard}
            />
            <TeacherRoute
              exact
              path="/teacher/student-predictions"
              component={TeacherPredictions}
            />

            {/* <PrivateRoute exact path="/admin/overview" component={Overview} />
            <PrivateRoute exact path="/admin/reports" component={StaffReports} />
            <PrivateRoute exact path="/admin/national/view" component={NationalView} />
            <PrivateRoute exact path="/admin/training" component={TrainingStatus} />
            <PrivateRoute exact path="/admin/infographics" component={Infographics} /> */}

            {/* <PrivateRoute exact path="/staff/report/create" component={SendReports} />


            <PrivateRoute exact path="/student/feedback" component={StudentFeedback} />
            <PrivateRoute exact path="/student/improvements" component={Improvements} /> */}

            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
