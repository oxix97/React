import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count : props.count,
        }
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
                <span>count : {this.state.count} </span>
                <button onClick={this.increaseCount}>Increase number</button>
            </div>
        )
    }
}

export default Counter;