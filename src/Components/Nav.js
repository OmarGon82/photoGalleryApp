import React from 'react';
import { Link } from 'react-router-dom';



const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to={"#"} onClick={() => props.getPhotos("armbar")}>Armbar</Link></li>
                <li><Link to={"#"} onClick={() => props.getPhotos("omoplata")}>Omoplata</Link></li>
                <li><Link to={"#"} onClick={() => props.getPhotos("rearnakedchoke")}>Chokes</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;