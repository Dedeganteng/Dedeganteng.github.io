import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import Gallery from './Components/Gallery';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <Card />
      <Gallery />
    </React.Fragment>
  );
}

export default App;
