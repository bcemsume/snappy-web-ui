import React, { ReactNode } from "react";
import { Router, Switch, Route } from "react-router-dom";
import History from "../shared/History";
import Home from "../screens/Home";

interface RouterModel {
  children: ReactNode;
}

export const LoginRouter: React.FC<RouterModel> = ({ children }) => {
  return (
    <Router history={History}>
      <div>
        {children}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/app" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
