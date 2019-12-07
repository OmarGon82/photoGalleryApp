import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav = (props) => {
    return (
        <nav className="main-nav">
        
            <ul>
                <li><NavLink to={"/armbar"} onClick={() => props.getPhotos("armbar")}>Armbar</NavLink></li>
                <li><NavLink to={"/omoplata"} onClick={() => props.getPhotos("omoplata")}>Omoplata</NavLink></li>
                <li><NavLink to={"/rearnakedchoke"} onClick={() => props.getPhotos("rearnakedchoke")}>Chokes</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;