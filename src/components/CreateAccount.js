import React, { Component } from 'react'


export default class CreateAccount extends Component {


  state = {
    name: "",
    age: "",
    species: "",
    breed: "",
    hobbies: "",
    plays_well: "",
    picture: "",
    bio: ""
  }

  handleChange = (e) => {
    console.log(e.target)
    this.setState({[e.target.id]: e.target.value})
  }

  // "id": 1,
  //     "name": "Oreo",
  //     "age": 9,
  //     "species": "Cat",
  //     "breed": "Domestic Shorthair",
  //     "hobbies": "Sleeping, Meowing, running",
  //     "plays_well": false,
  //     "picture": "https://res.cloudinary.com/mod4flatiron010719/image/upload/v1553623428/mod4%20project/Oreo.jpg",
  //     "bio": null

  render() {
    return(
      <div>
      <h1>Create Account</h1>
      <div>
      <form>
        <fieldset>
          <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="age">Age</label>
            <input type="integer" id="age" value={this.state.age} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="species">Species</label>
            <input type="text" id="species" value={this.state.species} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="breed">Breed</label>
            <input type="text" id="breed" value={this.state.breed} onChange={this.handleChange}/>
          </p>
        </fieldset>
      </form>

      </div>
      </div>
    )
  }
}
