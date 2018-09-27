import React, { Component } from 'react';
import dummyData from '../data/dummyData';
import Event from './Event';
import fire from "../config/Fire";

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
        }
    }

    componentWillMount() {
        let eventsList = [];
        fire.database().ref().child("events").once("value", (snap) => {
             snap.forEach((data) => {
                console.log(data);
                let name = data.val().name;
                let text = data.val().text;
                let location = data.val().location;
                let pic = data.val().pic;
                let startt = data.val().startt;
                let endt = data.val().endt;
                var participants = data.val().participantes;
          
                let points = data.val().points;
                let key = data.key;

                let placholderImage = "http://eventmanagementdelhi.in/blog/wp-content/uploads/2018/01/events.jpg";

                let event = {
                                "key": key,
                                "title": name, 
                                "description": text,
                                "image": pic ? pic : placholderImage,
                                "dateStart": startt,
                                "dateEnd": endt,
                                "location": location,
                                "participants": participants,
                                "creator": "6f7fug97g7d4",
                                "creator_name": "Thomas",
                                "creator_pic": "https://randomuser.me/api/portraits/men/23.jpg",
                                "points": points 
                            }

                eventsList.push(event);         
              });
              this.setState({...this.state, data: eventsList}); 
          });
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