// need to keep file here so pictures can render
import React, { Component, Fragment } from 'react'
import PetInfo from './PetInfo'
import PostContainer from '../containers/PostContainer'
import SuggestionContainer from '../containers/SuggestionContainer'
import DateContainer from '../containers/DateContainer'
// import './css/PetProfile.css'
// can import every photo and logically render
// name.
export default class PetProfile extends Component {


  findPet = () => {
    console.log("running");
    // console.log(this.props)
    // debugger
    let pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id))
    console.log(pet);
    // debugger
    return <PetInfo pet={pet}/>
  }

  render() {
    console.log("something");
    // console.log(this.props);
    // console.log(this.props.pet.picture)
    // let {picture} = this.props.pet
    // console.log(picture);
    // // debugger
    return(
      <Fragment>
        <h1>Pet Profile</h1>
        {this.findPet()}
        <PostContainer />
        <DateContainer />
      </Fragment>
    )
  }
}

// <PetInfo pet={this.props.pet}/>
// render for pet imgs
// <img src={require(`${this.props.pet.picture}`)}/>
