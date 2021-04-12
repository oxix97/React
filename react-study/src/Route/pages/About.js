import React from 'react'
import queryString from 'querystring'

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const color = query;
    console.log(query);
    return (
        <div>
            <h2 style={color}>About</h2>
            <p>
                Im About Page <br/>
                id : {match.params.name}.
            </p>
        </div>
    );
};
export default About;