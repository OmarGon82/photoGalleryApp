import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = (props) => {
    return (
        <nav className="main-nav">
        
            <ul>
                <li><NavLink to={"/search/armbar"} onClick={() => props.getPhotos("armbar")}>Armbar</NavLink></li>
                <li><NavLink to={"/search/omoplata"} onClick={() => props.getPhotos("omoplata")}>Omoplata</NavLink></li>
                <li><NavLink to={"/search/rearnakedchoke"} onClick={() => props.getPhotos("rearnakedchoke")}>Chokes</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;