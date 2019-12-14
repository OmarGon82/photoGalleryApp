import React from 'react';

/**
 * 
 * @param {*} props receives props from App component
 * renders the lis to be nested in the ul
 */

const Photo = ( props ) => {
    const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    return (
        <li>
            <img src={url}  alt=""/>
           
        </li>
    )
}

export default Photo;