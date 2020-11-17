import React from 'react';
// import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SingleProject from "./pages/singleProject";
import SignIn from "./pages/signIn";
import LogIn from "./pages/logIn";
import './App.scss';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/sign-up" component={ SignUp } />
          <Route exact path="/home/:id" component={ Home } />
          <Route exact path="/sign-in/:id" component={ SignIn } />
          <Route exact path="/project/:id" component={ SingleProject } />
          <Route exact path="/login" component={ LogIn } />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
