import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, 
         Route  
} from 'react-router-dom';

import PhotoContainer from  './Components/PhotoContainer';
import Nav from './Components/Nav';
import SearchForm from './Components/Search';
import  apiKey  from './config';


class  App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }
  
  getPhotos = (query = "bjj") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
        this.setState({
          photos: response.data.photos.photo
        });
    })
    .catch( error => {
      console.log("Error fetching and parsin data", error);
    });
  }
  
  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Route exact path='/' />
        <SearchForm 
          getPhotos={this.getPhotos}
        />

        <Nav 
        getPhotos={this.getPhotos}
        />
        <PhotoContainer data={this.state.photos}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;