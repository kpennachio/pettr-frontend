import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import UserContainer from './containers/UserContainer'
import LoginContainer from './containers/LoginContainer'
import CreateAccount from './components/CreateAccount'


class App extends Component {

  state = {
    pets: [],
    currentUserName: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/pets')
    .then(resp => resp.json())
    .then(pets => this.setState({pets}))
  }

  logout = () => {
    localStorage.removeItem('currentPet')
    console.log("logout")
  }

  render() {
    return (
      <div className="App">
       <Link to="/">Home</Link>
       <Link to="/login" onClick={this.logout}>Logout</Link>

        <Switch>
          <Route path="/login" component={(props) => <LoginContainer {...props} pets={this.state.pets}  />} />
          <Route path="/create_account" component={(props) => <CreateAccount {...props} />} />
          <Route path="/pet/:id" render={(props) => <UserContainer {...props} pets={this.state.pets} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
