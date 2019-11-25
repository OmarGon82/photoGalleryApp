import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {
    render () {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <Photo />
            </div>
        )
    }
}

export default PhotoContainer;