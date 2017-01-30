import React, { Component } from 'react';
import './App.css';

import About from "./About"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Scott Cazan
        </div>
		<About/>
      </div>
    );
  }
}

export default App;
