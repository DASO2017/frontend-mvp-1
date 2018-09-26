import React, { Component } from 'react';
import '../../styling/EventsPage/header.css';
import '../../styling/EventsPage/cards.css';
import '../../styling/main.css';
import Navbar from '../sections/Navbar';
import Header from '../sections/Header';
import EventsOverview from '../sections/EventsOverview';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <EventsOverview />
            </div> 
        );
    }
}

export default LandingPage;