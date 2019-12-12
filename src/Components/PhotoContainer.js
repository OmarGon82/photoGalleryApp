import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './Photo';
import NotFound from './NotFound';


class PhotoContainer extends Component {
    

    
    componentDidMount() {
        const { match } = this.props;
        console.log(match.url)
        this.props.getPhotos();
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
            photos = <NotFound />
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