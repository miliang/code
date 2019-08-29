import React, { Component } from 'react';
import Nav from  './components/Nav/Nav'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'

import ProductList from './page/ProductList/ProductList'
import Shopping from './page/Shopping/Shopping'
import Login from './page/Login/Login'
import Detail from './page/Detail/Detail'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>day4-1</h1>
        <BrowserRouter>
          <div>
            <Nav/>
            <Route exact path="/" component={ProductList}/>
            <Route path="/ProductList" component={ProductList}/>
            <Route path="/Shopping" component={Shopping}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Detail" component={Detail}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
