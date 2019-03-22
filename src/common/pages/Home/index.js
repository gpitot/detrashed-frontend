
import React, {Component} from 'react';
import styled from 'styled-components';

import './core.css';

import Mappable from './map';
import Authenticate from '../Authenticate';

import CreateEvent from '../Interactions/create-event.js';
import {MeetupApi} from '../../../api/meetup-api'



class Home extends Component {

    state = {
       events : [],
       mapClicked : null,
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
        } else {
            console.log("NO EVENTS")
            localStorage.removeItem('access_token')
        }
    }

    addEvent =(event)=>{
        const events = [...this.state.events];
        events.push(event);
        this.setState({events})
    }

    handleClick = (e) => {
        console.log(e);
        this.setState({mapClicked : e})
    }

    render() {
        
        return (
            <Area>
                <Mappable events={this.state.events} handleClick={this.handleClick} />
                <CreateEvent 
                    mapClicked={this.state.mapClicked} 
                    addEvent = {this.addEvent}
                />
                
                <Authenticate />
            </Area>
        )
    }
}

const Area = styled.div``;





export default Home;