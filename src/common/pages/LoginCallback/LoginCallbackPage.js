import React from 'react';

import { BackendApi } from '../../../api/backend-api';

class LoginCallbackPage extends React.Component {
    componentDidMount() {
        console.log('hello');

        const params = new URLSearchParams(window.location.search);


        const code = params.get('code');

        if (code) {
            this.getTokens(code);
        }

        
    }

    async getTokens(code) {
        const data = await BackendApi.getTokens(code);
        /* handle error here */
        console.log(data);
        if (data.access_token) {
            this.setLocalSession(data);
        } else if (localStorage.getItem('access_token') && localStorage.getItem('refresh_token')) {
            window.location = `${process.env.PUBLIC_URL}/`;
        } else {
        // TODO: Display error somewhere
            window.location = `${process.env.PUBLIC_URL}/error`;
        }
    }

    setLocalSession(data) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        /* later consider adding epoch time of expiry so we can refresh before making a request */
        const expiry = new Date().getTime() + data.expires_in * 1000;
        localStorage.setItem('expiry_epoch', expiry);
        window.location = `${process.env.PUBLIC_URL}/`;
    }

    render() {
        return 'Loading...';
    }
}

export default LoginCallbackPage;
