import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import Gallery from './Components/Gallery';
import Produk from './Components/Produk';
import Footer from './Components/Footer';

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <Card />
      <Gallery />
      <Produk />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
