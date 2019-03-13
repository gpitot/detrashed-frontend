import React, {Component} from 'react';
import {MeetupApi} from '../../../api/meetup-api'

class ListEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }

        this.getEvents = this.getEvents.bind(this);
    }
    

    componentDidMount() {
        this.getEvents();
    }

    async getEvents() {
        const data = await MeetupApi.getEvents();
        const events = await data.events;
        if (events) {
            console.log(events);
            this.setState({events})
        }
        
    }

    render() {
        return (
            <ul>
                {
                    this.state.events.map((event) => {
                        return (
                            <li><a href = {event.url}>{event.name.text}</a></li>
                        )
                    })
                }
            </ul>
        )
    }
}


export default ListEvents;