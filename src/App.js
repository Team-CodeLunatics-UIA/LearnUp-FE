import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute, Home, About, Overview, Signup, Page404, Login } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/admin/overview" component={Overview} />

          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
