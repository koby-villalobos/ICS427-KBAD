import React, { Component } from 'react';
import logo from './lock-128.png';
import './App.css';
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import Iroh from 'iroh';

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

// function add(a, b) {
//   return a + b;
// };
//
// let stage = new Iroh.Stage(add.toString());
// stage.addListener(Iroh.FUNCTION).on("return", function(e) {
//   if (e.name === "add") e.return = 42;
// });
//
// eval(stage.script);
//
// document.body.innerHTML = add(2, 2);


export default App;
