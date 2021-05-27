import React from "react";
import PropTypes from 'prop-types';

class PropsComponent extends React.Component{
    render() {
        return(
            <div>
                {this.props.name}
            </div>
        )
    }
}

PropsComponent.propTypes = {
    name : PropTypes.string.isRequired,
}

export default PropsComponent;