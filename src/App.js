import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import UserContainer from './containers/UserContainer'

// route => / => Home
// route => / => Home




class App extends Component {
  render() {
    return (
      <div className="App">
       <Link to="/">Home</Link>
       <UserContainer />
      </div>
    );
  }
}

export default App;
