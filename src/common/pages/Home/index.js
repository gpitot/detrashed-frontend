
import React, {Component} from 'react';
import styled from 'styled-components';

import Authenticate from '../Authenticate';

import CreateEvent from '../Interactions/create-event.js';

class Home extends Component {



    render() {
        return (
            <Area>
                <CreateEvent />

                <Authenticate />
            </Area>
        )
    }
}

const Area = styled.div``;

export default Home;