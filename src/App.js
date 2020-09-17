import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectsMobile from "./pages/ProjectsMobile";
import ProjectsWebImager from "./pages/ProjectsWebImager";
import ProjectsWebCovid19 from "./pages/ProjectsWebCovid19";
import ProjectsGraphic from "./pages/ProjectsGraphic";
import ProjectsPhotography from "./pages/ProjectsPhotography";
import ProjectsMusicProd from "./pages/ProjectsMusicProd";
import ProjectsSoundDesign from "./pages/ProjectsSoundDesign";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Switch>
        <Route to exact path="/">
          <Home />
        </Route>
        <Route to exact path="/projects">
          <ProjectsMobile />
        </Route>
        <Route to exact path="/projects/web-development">
          <Projects />
        </Route>
        <Route to exact path="/projects/web-development/imager">
          <ProjectsWebImager />
        </Route>
        <Route to exact path="/projects/web-development/covid-19-tracker">
          <ProjectsWebCovid19 />
        </Route>
        <Route to exact path="/projects/graphic-design">
          <ProjectsGraphic />
        </Route>
        <Route to exact path="/projects/photography">
          <ProjectsPhotography />
        </Route>
        <Route to exact path="/projects/music-production">
          <ProjectsMusicProd />
        </Route>
        <Route to exact path="/projects/sound-design">
          <ProjectsSoundDesign />
        </Route>
        <Route to exact path="/experience">
          <Experience />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
