import React, { Component } from 'react';

import axios from 'axios';
import { BrowserRouter, 
         Route,
         Switch 
} from 'react-router-dom';


//compponent imports
import PhotoContainer from  './Components/PhotoContainer';
import Nav from './Components/Nav';
import SearchForm from './Components/Search';
import NotFound from './Components/NotFound'
import  apiKey  from './config';



class  App extends Component {

  /**
   * Sets the state for this project. 
   */
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }
  
  /**
   * fetchs photos from flicker using axios.
   * @param {value} the string value the url will use to get the initial photos.
   * returns an error if the promise isn't fulfilled 
   */
  getPhotos = (query = "bjj") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
    })
    .catch( error => {
      console.log("Error fetching and parsin data", error);
    });
  }
  
  
  render() {
    return (
      <BrowserRouter>
      <div className="container"> 
      <SearchForm getPhotos={this.getPhotos}  />
      <Nav getPhotos={this.getPhotos} />
       <Switch>
       {/* sets the home route  */}
          <Route
            exact path="/" 
            render={ () => <PhotoContainer getPhotos={this.getPhotos} data={this.state.photos} loading={this.state.loading} /> } 
          />
        {/* sets the route for the search path */}
            <Route
            path="/search/:query"
            render={ () => <PhotoContainer getPhotos={this.getPhotos} data={this.state.photos} loading={this.state.loading} /> }
            />
            {/* if no routes match it displays the NotFound page */}
            <Route component={NotFound} />
       </Switch>
       
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;