import React, {Component} from 'react';
import styled from 'styled-components';
import {MeetupApi} from '../../../api/meetup-api'



class CreateEvent extends Component {

    constructor(props) {
        super(props);

        const d = new Date();
        //const startdate = `${d.getUTCFullYear()}-${this.fullDate(d.getUTCMonth())}-${this.fullDate(d.getUTCDate())}T09:00`;
        const startdate = this.getStartDate();

        this.state = {
            createOpen:false,
            selecting : false,
            confirming:false,

            startdate : startdate
        }
        this.Create = this.Create.bind(this);
    }

    getStartDate() {

        const d = new Date();
        const year = d.getUTCFullYear();
        const month = fullDate(d.getUTCMonth());
        const day = fullDate(d.getUTCDate());

        return `${year}-${month}-${day}T09:00`;

        function fullDate(d) {
            if (d < 10) {
                return `0${d}`;
            }
            return d;
        }
    }
    


    componentDidUpdate(prevProps) {
        if (prevProps.mapClicked === this.props.mapClicked) return;

        if (this.state.selecting) {
            this.selectLocation();
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    async Create() {
        const res = await MeetupApi.createEvent();
        console.log(res);
    }

    toggleEvent = () => {
        this.setState({createOpen : !this.state.createOpen, selecting : !this.state.selecting, confirming:false})
    }


    selectLocation() {
        this.setState({confirming:false})
        setTimeout(()=>{
            this.setState({confirming:true})
        }, 500);
    }

    render() {
        if (!this.state.createOpen) {
            return <Closed onClick={this.toggleEvent}>Create Event</Closed>
        }

        let eventX = 0;
        let eventY = 0;
        let display = 'none';
        if (this.props.mapClicked && this.state.selecting) {
            eventX = this.props.mapClicked.originalEvent.offsetX - 25;
            eventY = this.props.mapClicked.originalEvent.offsetY - 25;
            display = 'block';

        }

        return (
            <React.Fragment>
                <CreateArea>
                    <CloseBtn onClick={this.toggleEvent}/>
                    <h3>Select a location on the map</h3>


                    <Calender type="datetime-local"
                        name="startdate"
                        defaultValue={this.state.startdate}
                        onChange={this.handleChange}
                    />

                </CreateArea>

                <Event style={{left:`${eventX}px`, top: `${eventY}px`, display}}>
                    {
                        this.state.confirming &&
                        <Confirm src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/480px-Light_green_check.svg.png'}/>
                    }
                </Event>
            </React.Fragment>
            
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

const Calender = styled.input``;

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


const Event = styled.div`
    position:absolute;
    width:50px;
    height:50px;
    border-radius:50%;
    background:#eee;
    border:solid 2px #3e603e;
    z-index:5;
    cursor:pointer;

    &:hover {
        background:#efe;
    }
`;

const Confirm = styled.img`
    position:absolute;
    top:50%;
    left:50%;
    width:60%;
    transform:translate(-50%, -50%);
    display:block;
`;

export default CreateEvent;