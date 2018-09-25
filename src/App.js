import React, { Component } from 'react'
import './resources/styles.css'

import Header from './components/Header_footer/Header.jsx'
import Featured from './components/Featured'
import VenueNfo from './components/VenueNfo'
import Highlights from './components/Highlights'
import Pricing from './components/Pricing'
import Location from './components/Location'

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
      </div>
    );
  }
}

export default App;
