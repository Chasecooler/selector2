import React, { Component } from "react";
import Shape from "./Shape";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: "square"
    };
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>
            Selected: <span> {this.state.selectedShape}</span>
          </div>
        </div>
        <div className="shape-list">
          <Shape shape="square" selectShape={this.selectShape} />
          <Shape shape="circle" selectShape={this.selectShape} />
          <Shape shape="triangle" selectShape={this.selectShape} />
        </div>
      </div>
    );
  }
}
export default Selector;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
