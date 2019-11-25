import React from 'react';
import PhotoContainer from  './Components/PhotoContainer';
import Nav from './Components/Nav';
import Search from './Components/Search';

function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      <PhotoContainer />
    </div>
  );
}

export default App;
