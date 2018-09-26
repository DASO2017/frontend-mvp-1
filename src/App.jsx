import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsPage from './pages/EventsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventsPage />
      </div>
    );
  }
}

export default App;
