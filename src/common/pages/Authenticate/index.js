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
            const expiry = localStorage.getItem('expiry_epoch');
            console.log(expiry);
            if (expiry && expiry > new Date().getTime()) {
                this.setState({auth:true, token: localStorage.getItem('access_token')})
            }
        }
    }


    render() {
        if (this.state.auth) return <div><h5>Authenticated</h5><h5>{this.state.token}</h5></div>
        return (
            <Button onClick={GreetingPagePresenter.linkButtonClicked}>Authenticate</Button>
        );
    }
}

const Button = styled.button`
    position:absolute;
    top:50px;
    right:50px;
    z-index:5;
    padding:10px;
    background:#eee;
    border:solid 1px black;
`;

export default GreetingPage;
