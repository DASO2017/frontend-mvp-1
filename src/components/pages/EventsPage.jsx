import React, { Component } from 'react';
import '../../styling/EventsPage/header.css';
import '../../styling/EventsPage/cards.css';
import '../../styling/main.css';
import Navbar from '../sections/Navbar';
import Header from '../sections/Header';
import EventsOverview from '../sections/EventsOverview';

class EventsPage extends Component {
    render() {
        console.log(this.props.isAuthenticated);
        return (
            <div>
                <Navbar isAuthenticated={this.props.isAuthenticated}/>
                <Header />
                <EventsOverview />
            </div> 
        );
    }
}

export default EventsPage;