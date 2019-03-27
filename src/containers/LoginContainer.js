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
    let currentPet = this.props.pets.find(pet => pet.name === name)
    if (currentPet) {
      localStorage.setItem('currentPet', currentPet.id);
      localStorage.setItem('currentPetOb', JSON.stringify(currentPet));
      console.log("local storage", localStorage.getItem('currentPet'));
      this.props.history.push(`/pet/${currentPet.id}`)
    }
    else {
      console.log("no existing pet")
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
