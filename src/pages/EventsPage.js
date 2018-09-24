import React, { Component } from 'react';
import '../styling/EventsPage/header.css';
import '../styling/EventsPage/cards.css';
import '../styling/main.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />  
            </div> 
        );
    }
}

export default LandingPage;