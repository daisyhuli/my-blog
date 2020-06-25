import React, { Component, lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Index from "views/Index";

const Admin = lazy(() => import("@/layout/admin"));
const hist = createBrowserHistory();

export default class Routes extends Component {
  render() {
    return (
      <Router history={hist}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
