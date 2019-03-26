import React, { Component } from 'react'
import Athena from './Pet_Pictures/Athena.JPG'

export default class PetProfile extends Component {

  render() {
    // console.log(this.props.pet.picture)
    let {name, species, breed, age} = this.props.pet
    // debugger
    return(
      <div>
        {name}
        {age}
        {species}
        {breed} 
      </div>
    )
  }
}

// render for pet imgs
// <img src={require(`${this.props.pet.picture}`)}/>
