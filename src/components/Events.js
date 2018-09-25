import React, { Component } from 'react';
import dummyData from '../data/dummyData';
import Event from '../components/Event';

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
            <div className="events">
                {Object.keys(this.state.data)
                    .map(key => 
                        <Event key={key} index={key} data={this.state.data[key]} />
                    )
                }
            </div>
        );
    }
}

export default Events;