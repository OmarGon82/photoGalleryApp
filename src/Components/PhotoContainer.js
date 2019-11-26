import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoContainer = props => {
    const results = props.data;
    let photos = results.map(photo => 
        <Photo 
        farm={photo.farm}
        serverId={photo.server}
        secret={photo.secret}
        id={photo.id}
        key={photo.id}
        />   
        );
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
                <NotFound />
            </ul>
        </div>
    )

}

export default PhotoContainer;