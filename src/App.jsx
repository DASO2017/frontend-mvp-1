import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import EventsPage from './components/pages/EventsPage';

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
