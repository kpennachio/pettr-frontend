import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class LoginContainer extends Component {


  state = {
    name: "",
    createAccount: false
  }

  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  updateCurrentUser = (e, name) => {
    e.preventDefault()
    let currentPet = this.props.pets.find(pet => pet.name === name)
    if (currentPet) {
      localStorage.setItem('currentPet', currentPet.id);
      console.log("local storage", localStorage.getItem('currentPet'));
      this.props.history.push(`/pets/${currentPet.id}`)
    }
    else {
      console.log("no current pet")
    }
  }



  render() {
    return(
      <div>
      <h1>Login</h1>
      <div>
        <p>Enter your name to login:</p>
        <form onSubmit={(e) => this.updateCurrentUser(e, this.state.name)}>
          <input type="text" onChange={this.changeName}/>
          <input type="submit" />
        </form>
        <div>
          <p>Or create an account and start going on playdates today!</p>
          <Link to="/create-account">Create Account</Link>
        </div>
      </div>
      </div>
    )
  }
}
