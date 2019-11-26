import React from 'react';
import { Link } from 'react-router-dom';



const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to={`#`}>Armbar</Link></li>
                <li><Link to={`#`}>Omoplata</Link></li>
                <li><Link to={`#`}>Kimura</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;