import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import UserContainer from './containers/UserContainer'
import LoginContainer from './containers/LoginContainer'

// route => / => Home
// route => / => Home




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

  // updateCurrentUser = (e, name) => {
  //   e.preventDefault()
  //   let currentPet = this.state.pets.find(pet => pet.name === name)
  //   if (currentPet) {
  //     this.setState({currentUserId: currentPet.id})
  //     console.log("name", currentPet.name)
  //     console.log(this.props)
  //     // this.props.history.push(`/pets/${currentPet.id}`)
  //   }
  //   else {
  //     console.log("no current pet")
  //   }
  // }

  render() {
    return (
      <div className="App">
       <Link to="/">Home</Link>
        <Switch>
          <Route path="/login" component={(props) => <LoginContainer {...props} pets={this.state.pets}  />} />
          <Route path="/pets/:id" component={(props) => <UserContainer {...props} pets={this.state.pets} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
