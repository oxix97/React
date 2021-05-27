import React from "react";
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
    render() {
        const {
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return(
            <div>
                <div>bool : {boolValue}</div>
                <div>number : {numValue}</div>
                <div>array : {arrayValue}</div>
                <div>obj : {objValue}</div>
                <div>node : {nodeValue}</div>
                <div>func : {funcValue}</div>
            </div>
        )
    }
}

ChildComponent.propTypes = {
    boolValue : PropTypes.bool,
    numValue : PropTypes.number,
    arrayValue : PropTypes.arrayOf(PropTypes.number),
    objValue : PropTypes.object,
    nodeValue : PropTypes.node,
    funcValue : PropTypes.func,
}

export default ChildComponent