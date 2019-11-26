import React from 'react';
/**
 * Will need to update this to add photos dynamically
 */
const Photo = ( props ) => {
    const url = `https://farm${props.farm}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`
    return (
        <li>
            <img src={url}  alt=""/>
           
        </li>
    )
}

export default Photo;