// need to keep file here so pictures can render
import React, { Component } from 'react'
// import Athena from '../Pet_Pictures/Brody.jpg'
import './css/PetProfile.css'
// can import every photo and logically render
// name.
export default class PetProfile extends Component {
  render() {
    console.log(this.props);
    // console.log(this.props.pet.picture)
    let {name, species, hobbies, breed, age, picture} = this.props.pet
    // debugger
    return(
      <div>
        {name}
        {age}
        {species}
        {breed}
        <div className="profile-pic">
          <img src={require(`${picture}`)} />
        </div>
      </div>
    )
  }
}

// render for pet imgs
// <img src={require(`${this.props.pet.picture}`)}/>
