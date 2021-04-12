import React from 'react'
import {NavLink, withRouter} from "react-router-dom";

const Menu = () => {
    const activeStyle = {
        color : 'green',
        fontSize : '2rem'
    };
    return(
        <div>
            <ul>
                <li><NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to={'/About'} activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to={'/About/react'} activeStyle={activeStyle}>React</NavLink></li>
                <li><NavLink to={'/posts'} activeStyle={activeStyle}>Post list</NavLink></li>
            </ul>
        </div>
    )
}
export default Menu;