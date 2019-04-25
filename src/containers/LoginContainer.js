import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class LoginContainer extends Component {


  state = {
    name: "",
  }

  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  updateCurrentUser = (e, name) => {
    e.preventDefault()
    // fake login by name of pet
    let currentPet = this.props.pets.find(pet => pet.name === name)

    if (currentPet) {
      // set local storage 'currentPet' to id of pet from login
      localStorage.setItem('currentPet', currentPet.id);

      // redirect to pet's profile after login
      this.props.history.push(`/pet/${currentPet.id}`)
    }
    else {
      // if pet name does not exist, redirect to create account page
      this.props.history.push("/create_account")
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
          <Link to="/create_account">Create Account</Link>
        </div>
      </div>
      </div>
    )
  }
}
