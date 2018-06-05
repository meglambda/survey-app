import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Userlist from './components/Userlist';
import Inform from './components/Inform';
import Home from './components/Home';
import Nav2 from './components/Nav2';
import Table from './components/Table';
import Header from './components/Header';


import './App.css';


class App extends Component {
 
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Userlist" component={Userlist} />
          <Route exact path="/Inform" component={Inform} />
          <Route exact path="/api/users/:id/info" component={Inform} />
          <Route exact path="/" component={Home} />

          
        </Switch>
      </Router>
    );
  }
}

export default App;
