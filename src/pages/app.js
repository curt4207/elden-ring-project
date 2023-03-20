import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import ClassesList from "./Classes";
import Home from ".";

const app = () => {
  return (
    <>
      {/* <Router>
        <Switch>
        <Route path="/" component={Home} />
          <Route path="/PlayerClasserList" component={ClassesList} />

        <Redirect to="/" />
        </Switch>
      </Router> */}
    </>
  );
};

export default app;
