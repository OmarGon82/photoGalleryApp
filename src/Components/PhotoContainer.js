import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//component imports
import Photo from './Photo';


class PhotoContainer extends Component {
    
    /**
     * uses the match object to the the query string
     * @param {query} the query of the url search string.
     */
    componentDidMount() {
        const { match } = this.props;
        const { query } = match.params
        this.props.getPhotos(query);
    }
    
    
    /**
     * method gets data via props and maps it out
     * if there are results it renders the Photo component if not then it shows message
     */
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
        photos = <h3>Sorry. Your search did not return any results. Please try again.</h3>
        }
        return (
            photos
        ) 
        
    }

    /**
     * renders the UL 
     * ternary expression to dynamically displays the type of images displayed default is BJJ
     * ternary expression that checks if the laoding state is true or false and displays a message accordingly
     */
    render() {
    
        return (
            <div className="photo-container">
                <h2>Results</h2>
                { this.props.match.params.query ? <h3> Images of {this.props.match.params.query}</h3> : <h3>Images of BJJ</h3>}
                <ul>
                    { this.props.loading ? <h3>Loading...</h3> : this.displayResults() }          
                </ul>
            </div>
        )
    }

}

export default withRouter(PhotoContainer);