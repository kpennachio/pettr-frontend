import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import UserContainer from './containers/UserContainer'
import LoginContainer from './containers/LoginContainer'

// route => / => Home
// route => / => Home




class App extends Component {


  render() {
    return (
      <div className="App">
       <Link to="/">Home</Link>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/pets/:id" component={UserContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
