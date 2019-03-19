


import React from 'react';
import Child from './child';
import ChildTwo from './child-two';

class Parent extends React.Component {
    state = {
        count : 0
    }

    handleClick = () => {
        this.setState({count : this.state.count + 1});
    }

    render() {
        return (
            <div>
                <button onClick = {this.handleClick}>Click</button>
                <Child count={this.state.count}/>
                <ChildTwo />
            </div>
        )
    }
}


export default Parent;