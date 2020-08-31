import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Switch>
        <Route to exact path="/">
          <Home />
        </Route>
        <Route to exact path="/projects/web-dev">
          <Projects />
        </Route>
        <Route to exact path="/experience">
          <Experience />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
