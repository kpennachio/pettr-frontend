import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Form, Input, Button } from 'semantic-ui-react'

import Header from '../components/Header'


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
      <div className="login-page">
      <Header />
      <div className="login-container centered" >
        <h1 id="login-header">Login</h1>
        <div>
          <p>Enter your name to login:</p>
          <Form onSubmit={(e) => this.updateCurrentUser(e, this.state.name)}>
            <Form.Field control={Input} onChange={this.changeName}/>
            <Button color="blue" type='submit'>
                Login
            </Button>
          </Form>
          <br/>
          <div>
            <p>Or create an account and start going on playdates today!</p>
            <Link to="/create_account">Create Account</Link>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
