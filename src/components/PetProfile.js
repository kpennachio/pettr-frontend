// need to keep file here so pictures can render
import React, { Component, Fragment } from 'react'
import PetInfo from './PetInfo'
import PostContainer from '../containers/PostContainer'
import SuggestionContainer from '../containers/SuggestionContainer'
import DateContainer from '../containers/DateContainer'
import PlayDate from './PlayDate'
// import './css/PetProfile.css'
// can import every photo and logically render
// name.
export default class PetProfile extends Component {


  // findPet = () => {
  //   let pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id))
  //   console.log(pet);
  //   return <PetInfo pet={pet}/>
  // }

  //localStorage.getItem('currentPet')

  renderPetProfile = () => {
    // if the pet profile id matches the current user id
    if (this.props.pet.id === parseInt(localStorage.getItem('currentPet'))) {
      return(
        <div>
          <h1>Pet Profile</h1>
          <PetInfo pet={this.props.pet}/>
          <PostContainer showForm={true}/>
          <div className="dating-container">
            <PlayDate {...this.props} user={true}/>
            
          </div>
        </div>
      )
    }
    else {
      return(
        <div>
          <h1>Pet Profile</h1>
          <PetInfo pet={this.props.pet}/>
          <PostContainer showForm={false}/>
            <div className="dating-container">
              <PlayDate {...this.props} user={false}/>
            </div>
        </div>
      )
    }
  }

  render() {
    return(
      <Fragment>
      {this.props.pet ?
        this.renderPetProfile()
        :
        null
      }
      </Fragment>
    )
  }
}
