import React, {Component} from 'react';
import {Map, TileLayer,  Marker, Popup } from 'react-leaflet';

import EventInfo from './event-info';

class Mappable extends Component {

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 4,
    };

    handleClick = (e) => {
        console.log('clicked map', e);
        //send handle click to parent
        //then to create event
        //if selecting location is true then create confirm message at spot
        //if confirmed then set location 
    }

    

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map 
                center={position} 
                zoom={this.state.zoom} 
                style={{height:'100vh', zIndex:1}}

                onClick={this.props.handleClick}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {
                    this.props.events.map((event) => {
                        if (event.venue === null) return null;
                        const eventpos = [event.venue.address.latitude, event.venue.address.longitude];
                        return (
                            <Marker position={eventpos} key={event.id}>
                                <Popup>
                                    <EventInfo event={event} />
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </Map>    
        )
    }
}

export default Mappable;