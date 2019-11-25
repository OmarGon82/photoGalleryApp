import React from 'react';

/**
 * Will need to update this to add photos dynamically
 */
const Photo = ( props ) => {
    return (
        <ul>
            <li>
                <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
            </li>
            <li>
                <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
            </li>
            <li>
                <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
            </li>
            <li>
                <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>
        </ul>
    )
}

export default Photo;