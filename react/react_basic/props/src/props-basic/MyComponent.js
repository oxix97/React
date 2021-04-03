import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    static defaultProps = {
        name: 'Chan'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state={
            number : 0
        }
    }

    render() {
        return (
            <div>
                <p>Hi ! my name is {this.props.name}</p>
                <p>I'm {this.props.age} old.</p>
                <p>number : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number : this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}

export default MyComponent;