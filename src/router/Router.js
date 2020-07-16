import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import routes from "./Routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            exact
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
