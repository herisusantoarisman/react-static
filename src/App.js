import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaticContent from "./Component/StaticContent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:content" name="about" exact component={StaticContent} />
      </Switch>
    </Router>
  );
}

export default App;
