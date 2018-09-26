import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import EventsPage from './components/pages/EventsPage';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';

const Test = () => <h1>Test</h1>

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: false,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" exact component={EventsPage} />
          <UserRoute isAuthenticated={this.state.isAuthenticated} path="/test" exact component={Test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
