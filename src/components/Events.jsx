import React, { Component } from 'react';
import dummyData from '../data/dummyData';
import Event from './Event';

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        this.setState({...this.state, data: dummyData});
    }

    render() {
        return (
            <div className="eventsWrapper">
                <div className="events">
                    {Object.keys(this.state.data)
                        .map(key => 
                            <Event key={key} index={key} data={this.state.data[key]} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Events;