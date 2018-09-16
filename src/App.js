import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/Header_footer/Header.jsx'
import Featured from './components/Featured'
class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: 'cornFlowerblue'}}>
        <Header/>
        <Featured />
      </div>
    );
  }
}

export default App;
