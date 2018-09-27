import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import fire from "./config/Fire";
import EventsPage from './components/pages/EventsPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import CreateAnEvent from './components/pages/CreateAnEvent';

import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      isAuthenticated: true,
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ ...this.state, user: user, isAuthenticated: true });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ ...this.state, user: null, isAuthenticated: false });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={EventsPage} />
          <UserRoute path="/create" exact component={CreateAnEvent} />
          <GuestRoute path="/login" exact component={Login} />
          <GuestRoute path="/signup" exact component={SignUp} />
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
