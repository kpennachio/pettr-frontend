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


  // findPet = () => {
  //   let pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id))
  //   console.log(pet);
  //   return <PetInfo pet={pet}/>
  // }

  render() {
    return(
      <Fragment>
      {this.props.pet ?
        <div>
          <h1>Pet Profile</h1>
          <PetInfo pet={this.props.pet}/>
          <PostContainer />
          <DateContainer />
        </div>
        :
        null
      }
      </Fragment>
    )
  }
}
