import React, { Component } from 'react';
import logo from './lock-128.png';
import './App.css';
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <div className="FirstComponent"><FirstComponent/></div>

          <div className="SecondComponent"><SecondComponent/></div>

          <div className="Developers">
            <p>Developers : Koby Villalobos, Braden Betz, Adrian Au, Davin Takahashi</p>
          </div>

        </div>
    );
  }
}

export default App;
