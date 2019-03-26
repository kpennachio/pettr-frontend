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
  render() {
    // console.log(this.props);
    // console.log(this.props.pet.picture)
    // let {picture} = this.props.pet
    // console.log(picture);
    // // debugger
    return(
      <Fragment>
        <PetInfo pet={this.props.pet}/>
        <PostContainer />
        <DateContainer />
        <SuggestionContainer />
      </Fragment>
    )
  }
}

// render for pet imgs
// <img src={require(`${this.props.pet.picture}`)}/>
