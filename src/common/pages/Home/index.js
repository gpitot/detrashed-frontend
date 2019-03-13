
import React, {Component} from 'react';
import styled from 'styled-components';

import Authenticate from '../Authenticate';

import CreateEvent from '../Interactions/create-event.js';
import ListEvents from './list-events';

class Home extends Component {



    render() {
        return (
            <Area>
                <CreateEvent />
                <ListEvents />
                <Authenticate />
            </Area>
        )
    }
}

const Area = styled.div``;

export default Home;