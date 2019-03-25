import React, { Component } from 'react'

export default class PetProfile extends Component {

  render() {
    console.log(this.props.pet.picture)

    return(
      <div>
        <img src={this.props.pet.picture}></img>
      </div>
    )
  }
}
