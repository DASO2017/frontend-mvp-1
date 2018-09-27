import React, { Component } from 'react';
import FilterButton from '../FilterButton';
import Events from '../Events';

class EventsOverview extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="content">
                <div className="eventsTitle">
                    <h2>Events</h2>
                    <div className="titleUnderscore"></div>
                    <div className="filters">
                        <FilterButton category="Votes"/>
                        <FilterButton category="Location"/>
                        <FilterButton category="Date"/>
                    </div>
                </div>
                <Events />

            </section>
        );
    }
}

export default EventsOverview;