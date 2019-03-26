import React, { Component } from 'react'
import PetProfile from '../PetProfile'
import Header from '../components/Header'

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
      if (pet.name === "Oreo") {
        return <PetProfile key={pet.id} pet={pet} />
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderPets()}
      </div>
    )
  }
}

export default UserContainer;
