import React, { Component } from 'react';

import axios from 'axios';
import { BrowserRouter, 
         Route,
         Switch 
} from 'react-router-dom';



import PhotoContainer from  './Components/PhotoContainer';
import Nav from './Components/Nav';
import SearchForm from './Components/Search';
// import NotFound from './Components/NotFound'
import  apiKey  from './config';



class  App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }
  
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
  
  // componentDidMount() {
  //   this.getPhotos();
  // }
  
  render() {
    return (
      <BrowserRouter>
      <div className="container"> 
      <SearchForm getPhotos={this.getPhotos}  />
      <Nav getPhotos={this.getPhotos} />
       <Switch>
          <Route
            exact path="/" 
            render={ () => <PhotoContainer getPhotos={this.getPhotos} data={this.state.photos} loading={this.state.loading} /> } 
          />
            <Route
            path="/search/query"
            render={ () => <PhotoContainer getPhotos={this.getPhotos} data={this.state.photos} loading={this.state.loading} /> }
            />
       </Switch>
       
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;