import React, { Component, Fragment } from 'react'
import { Route, Link } from "react-router-dom";

import PetProfile from '../components/PetProfile'
import Header from '../components/Header'
import SuggestionContainer from './SuggestionContainer'

class UserContainer extends Component {



  // finds pet from id in the URL
  findPet = () => {
    let pet = ""
    if (this.props.match.params.id) {
      pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id))
    }
    else if (localStorage.getItem('currentPet')) {
      pet = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
    }
    console.log(pet);
    return pet
  }


  renderUserContainer = () => {
    if (localStorage.getItem('currentPet')) {
      return(
        <Fragment>
          <Header />
          <PetProfile {...this.props} pet={this.findPet()}/>
          <SuggestionContainer pets={this.props.pets}/>
        </Fragment>
      )
    }
    // else {
    //   this.props.history.push("/login")
    // }
  }

  render() {

    return (
      <Fragment>
      {this.renderUserContainer()}
      </Fragment>
    )
  }
}

export default UserContainer;
