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
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/app" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
