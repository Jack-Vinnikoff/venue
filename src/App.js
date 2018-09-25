import React, { Component } from 'react'
import './resources/styles.css'

import Header from './components/Header_footer/Header.jsx'
import Featured from './components/Featured'
import VenueNfo from './components/VenueNfo'
import Highlights from './components/Highlights'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Footer from './components/Header_footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px"}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
