import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import UserContainer from './containers/UserContainer'
import LoginContainer from './containers/LoginContainer'
import CreateAccount from './components/CreateAccount'


class App extends Component {

  state = {
    pets: [],
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



  createNewPet = (data) => {
    fetch('http://localhost:3000/api/v1/pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(console.log)
  }



  render() {
    return (
      <div className="App">
      {localStorage.getItem('currentPet')
        &&
      <Fragment>
       <Link to={`/pet/${localStorage.getItem('currentPet')}`}>Home</Link>
       <Link to="/login" onClick={this.logout}>Logout</Link>
      </Fragment>
      }

        <Switch>
          <Route path="/login" component={(props) => <LoginContainer {...props} pets={this.state.pets}  />} />
          <Route path="/create_account" component={(props) => <CreateAccount {...props} createNewPet={this.createNewPet} />} />
          <Route path="/home" render={(props) => <UserContainer {...props} pets={this.state.pets} />}/>
          <Route path="/pet/:id" render={(props) => <UserContainer {...props} pets={this.state.pets} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
