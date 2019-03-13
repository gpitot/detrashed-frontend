import React from 'react';
import { Switch, Route } from 'react-router-dom';


import LoginCallbackPage from './common/pages/LoginCallback/LoginCallbackPage';
import Home from './common/pages/Home'

export default function Router(props) {
    return (
        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/callback" component={LoginCallbackPage} />
            

        </Switch>
    );
}
