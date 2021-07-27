import React from "react";

class ComponentBasic extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((number) => ({
      count: number.count + 1,
    }));
  };

  minus = () => {
    this.setState((number) => ({
      count: number.count - 1,
    }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("cruel now");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default ComponentBasic;
