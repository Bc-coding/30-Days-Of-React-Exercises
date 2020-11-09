import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Day19 from "./Day19.js";
import Day20 from "./Day20.js";

const NotFound = (props) => <h1>The page you're looking for is not found</h1>;

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/day19">
            <Day19 />
          </Route>
          <Route path="/day20">
            <Day20 />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
