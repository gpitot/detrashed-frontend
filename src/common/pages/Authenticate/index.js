import React from 'react';
import styled from 'styled-components';


// TODO: Add font used in UI desgin
import {GreetingPagePresenter} from './GreetingPagePresenter';


class GreetingPage extends React.Component {


    state = {
        auth: false,
        token : ''
    }
    componentDidMount() {
        // check current localstorage and see if tokens have expired, if not redirect to discover
        if (localStorage.getItem('access_token')) {
            
            this.setState({auth:true, token: localStorage.getItem('access_token')})
            
        }
    }


    render() {
        if (this.state.auth) return null;
        return (
            <Blackout>
               <Button onClick={GreetingPagePresenter.linkButtonClicked}>Log in with Eventbrite to view events</Button>
            </Blackout>
        );
    }
}
const Blackout = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    z-index:2;
`;


const Button = styled.button`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    z-index:5;
    padding:20px;
    background:#eee;
    border:solid 1px #2f2f2f;
    color:#2f2f2f;
    border-radius:4px;
    font-size:24px;
    cursor:pointer;
    &:hover {
        background:#2f2f2f;
        color:#eee;
    }
`;

export default GreetingPage;
