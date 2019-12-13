import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './Photo';


class PhotoContainer extends Component {
    

    
    componentDidMount() {
        const { match } = this.props;
        const { query } = match.params
        this.props.getPhotos(query);
    }
    
    
    
    displayResults = () => {
        const results = this.props.data;
        let photos;
        
        if (results.length > 0) {
            photos = results.map(photo => 
                <Photo
                {...photo}
                key={photo.id}
                />
            );
        } else {
            photos = <h3>Sorry. Your search did not return any results. Please try again :) </h3>
        }
        
        return (
            photos
        )
    }

    render() {

        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { this.props.loading ? <p>Loading...</p> : this.displayResults() }          
                </ul>
            </div>
        )
    }

}

export default withRouter(PhotoContainer);