import React from 'react';
import styled from 'styled-components';


const EventInfo = (props) => {
    const {event} = props;
    return (
        <Event>
            <Name href={event.url}>{event.name.text}</Name>
            <Desc>{event.description.text}</Desc>
            <Dates>
                
            </Dates>
        </Event>
    )
}

const Event = styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    overflow: hidden;
`;

const Name = styled.a`
    text-align:center;
    color:black;
`;

const Desc = styled.div`
    max-width: 100%;


`;

const Dates = styled.div``;


export default EventInfo;