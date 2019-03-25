import React, { Component } from 'react'
import PetProfile from './PetProfile'

class UserContainer extends Component {

  state = {
    pets: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/pets')
    .then(resp => resp.json())
    .then(pets => this.setState({pets}))
  }

  renderPets = () => {
    return this.state.pets.map(pet => {
      return <PetProfile pet={pet} />
    })
  }

  render() {
    return (
      <div>
        {this.renderPets()}
      </div>
    )
  }
}

export default UserContainer;
