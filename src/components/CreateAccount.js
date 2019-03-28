import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class CreateAccount extends Component {


  state = {
    name: "",
    age: "",
    species: "",
    breed: "",
    hobbies: "",
    plays_well: "",
    picture: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleCheckboxChange = (e) => {
    this.setState((prevState) => ({
      plays_well: !prevState.plays_well
    }))
  }


  openWidget = (e) => {
    e.preventDefault()
    let widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUD_NAME, uploadPreset: process.env.REACT_APP_UPLOAD_PRESET }, (error, result) => {this.seeResult(result)});
    widget.open();
  }

  seeResult = (result) => {
    if (result.event === "success") {
      this.setState({picture: result.info.secure_url})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createNewPet(this.state)
    this.setState({
      name: "",
      age: "",
      species: "",
      breed: "",
      hobbies: "",
      plays_well: false,
      picture: ""
    })
  }

  render() {
    return(
      <div>
      <h1>Create Account</h1>
      <div>
      <div>
        <Link to="/login">Try logging in again?</Link>
      </div>
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
          <p>
            <label htmlFor="hobbies">Hobbies</label>
            <textarea id="hobbies" value={this.state.hobbies} onChange={this.handleChange}/>
          </p>
          <p>
            <label htmlFor="plays_well">Do you play well with others?</label>
            <input type="checkBox" id="plays_well" checked={this.state.plays_well} onClick={this.handleCheckboxChange}/>
          </p>
          <p>
            <label htmlFor="picture">Select a profile picture</label>
            <button onClick={this.openWidget}>Select Image</button>
            <input type="text" id="image" value={this.state.picture} onChange={this.handleChange}/>
          </p>
          <p>
            <input type="submit" value="Create Account" onClick={this.handleSubmit}/>
          </p>
        </fieldset>
      </form>
      </div>

      </div>
      </div>
    )
  }
}
