import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  PrivateRoute,
  PublicRoute,
  Home,
  About,
  Overview,
  Signup,
  Page404,
  Login,
  StaffReports,
  NationalView,
  TrainingStatus,
  Infographics,
  StudentSignup,
  StudentFeedback,
  Improvements,
  SendReports,
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

            <PrivateRoute exact path="/admin/overview" component={Overview} />
            <PrivateRoute exact path="/admin/reports" component={StaffReports} />
            <PrivateRoute exact path="/admin/national/view" component={NationalView} />
            <PrivateRoute exact path="/admin/training" component={TrainingStatus} />
            <PrivateRoute exact path="/admin/infographics" component={Infographics} />

            <PrivateRoute exact path="/staff/report/create" component={SendReports} />

            <PrivateRoute exact path="/student/feedback" component={StudentFeedback} />
            <PrivateRoute exact path="/student/improvements" component={Improvements} />

            <Route path="*" component={Page404} />
          </Switch>
        </Router>
      </AuthState>
    </div>
  );
}

export default App;
