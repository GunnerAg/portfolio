import './App.css';
import Home from './components/Home';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css'


 class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={(routeProps) => {
            return <Home {...routeProps} />
          }} />
          <Route exact path="/proyects" render={(routeProps) => {
            return <Proyects {...routeProps} />
          }} />
          <Route exact path="/contact" render={(routeProps) => {
            return <Contact {...routeProps} />
          }} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);