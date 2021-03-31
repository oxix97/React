import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonEffect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }
                }>더하기
                </button>
            </div>
        )
    }
}

export default ButtonEffect;