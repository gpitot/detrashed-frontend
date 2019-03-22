import React from 'react';
import { Switch, Route } from 'react-router-dom';


import LoginCallbackPage from './common/pages/LoginCallback/LoginCallbackPage';
import Home from './common/pages/Home'

import Test from './common/pages/Test/parent';

export default function Router(props) {
    console.log(process.env.PUBLIC_URL)
    return (
        <Switch>

            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route path={process.env.PUBLIC_URL + "/callback"} component={LoginCallbackPage} />
            

            <Route path = {process.env.PUBLIC_URL + "/test"} component = {Test} />

        </Switch>
    );
}
