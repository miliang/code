import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './comment/commentBox/commentBox'
class App extends Component {
  render() {
    // 这里里面就是jsx语法
    return (
      <div className="App">
        {/*这是jsx*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Box/>
      </div>
    );
  }
}

export default App;
