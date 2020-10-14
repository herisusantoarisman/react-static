import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StaticContent from "./Component/StaticContent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StaticContent content="index" />
        </Route>
        <Route path="/about" exact>
          <StaticContent content="about" />
        </Route>
        <Route path="/services" exact>
          <StaticContent content="services" />
        </Route>
        <Route path="/portfolio" exact>
          <StaticContent content="portfolio" />
        </Route>
        <Route path="/blog" exact>
          <StaticContent content="blog" />
        </Route>
        <Route path="/blog-details" exact>
          <StaticContent content="blog-details" />
        </Route>
        <Route path="/team" exact>
          <StaticContent content="team" />
        </Route>
        <Route path="/contact" exact>
          <StaticContent content="contact" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
