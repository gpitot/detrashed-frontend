import React, {Component} from 'react';
import styled from 'styled-components';
import {MeetupApi} from '../../../api/meetup-api'



class CreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createOpen:false,
            selecting : false,
        }
        this.Create = this.Create.bind(this);
    }

    async Create() {
        const res = await MeetupApi.createEvent();
        console.log(res);
    }

    toggleEvent = () => {
        this.setState({createOpen : !this.state.createOpen})
    }

    render() {
        if (!this.state.createOpen) {
            return <Closed onClick={this.toggleEvent}>Create Event</Closed>
        }

        return (
            <CreateArea>
                <CloseBtn onClick={this.toggleEvent}/>
                <h3>Select a location on the map</h3>


                

            </CreateArea>
        )
    }
}

const Closed = styled.div`
    position:absolute;
    top:50px;
    left:150px;
    z-index:4;
    padding:15px;
    color: #3e603e;
    background: #2cea05;
    font-size:20px;
    border:solid 2px #3e603e;
    border-radius:5px;
    cursor:pointer;

    @media (max-width:500px) {
        bottom:0;
        width:100%;
        left:0;
        top:auto;
        text-align:center;
    }
`;


const CreateArea = styled(Closed)`



`;

const CloseBtn = styled.div`
    position:absolute;
    top:-16px;
    right:-16px;
    height:32px;
    width:32px;
    background:red;
    border-radius:50%;
    border:solid 1px black;
    color:white;
    text-align:center;
    line-height:32px;

    &:after {
        content: 'X';
    }

`;



export default CreateEvent;