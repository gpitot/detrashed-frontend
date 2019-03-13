import React, { Component } from 'react';
import styled from 'styled-components';

import Router from './Router';

import backgroundImage from './img/album.jpg';


class App extends Component {
    

   


    render() {
        return (
            <React.Fragment>
                

                <Router props={this.props} />

            </React.Fragment>


        );
    }
}
export default App;