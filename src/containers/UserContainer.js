import React, { Component, Fragment } from 'react'
import { Route, Link } from "react-router-dom";

import PetProfile from '../components/PetProfile'
import Header from '../components/Header'
import SuggestionContainer from './SuggestionContainer'

class UserContainer extends Component {

  // state = {
  //   pets: []
  // }
  //
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/pets')
  //   .then(resp => resp.json())
  //   .then(pets => this.setState({pets}))
  // }

  // renderPets = () => {
  //   return this.state.pets.map(pet => {
  //     if (pet.name === "Oreo") {
  //       return <PetProfile key={pet.id} pet={pet} />
  //     }
  //   })
  // }

  // finds pet from id in the URL
  findPet = () => {
    let pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id))
    console.log(pet);
    return pet
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PetProfile {...this.props} pet={this.findPet()}/>
        <SuggestionContainer pets={this.props.pets}/>
      </Fragment>
    )
  }
}

export default UserContainer;
