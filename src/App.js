import React, { Component } from 'react';


import Router from './Router';




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