import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state.count = 0;
        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount() {
        this.setState(({count}) => ({
            count: count + 1,
        }))
    }

    render() {
        return (
            <div>
                <span>count : {this.count} </span>
                <button onClick={this.increaseCount}>Increase number</button>
            </div>
        )
    }
}

export default Counter;