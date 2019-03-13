import React from 'react';
import {MeetupApi} from '../../../api/meetup-api'

async function handleClick() {

    const res = await MeetupApi.createEvent();
    console.log(res);

}

const createEvent = (props) => {
    return <button onClick={handleClick}>Create event</button>
}

export default createEvent;