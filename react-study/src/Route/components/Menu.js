import React from 'react'
import {Link} from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/about/react'}>React</Link></li>
            </ul>
        </div>
    )
}
export default Menu;