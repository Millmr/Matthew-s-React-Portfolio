import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/index";
import About from "./pages/about";
import Wrapper from "./components/wrapper";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NoMatch from "./pages/noMatch";

function App() {
  return (
  <Router>
    <Navbar />
    <Wrapper>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/My-React-Portfolio" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Wrapper>
  </Router>
  );
}

export default App;
