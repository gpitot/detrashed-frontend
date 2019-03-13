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
            if (expiry && expiry > new Date().getTime()) {
                this.setState({auth:true, token: localStorage.getItem('access_token')})
            }
        }
    }


    render() {
        if (this.state.auth) return <div><h5>Authenticated</h5><h5>{this.state.token}</h5></div>
        return (
            <button onClick={GreetingPagePresenter.linkButtonClicked}>Authenticate</button>
        );
    }
}



export default GreetingPage;
