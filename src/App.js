import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import UserContainer from './containers/UserContainer'
import LoginContainer from './containers/LoginContainer'
import CreateAccount from './components/CreateAccount'
import './App.css';



class App extends Component {

  state = {
    pets: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/pets')
    .then(resp => resp.json())
    .then(pets => this.setState({pets}))
  }

  logout = () => {
    localStorage.removeItem('currentPet')
    console.log("logout")
  }

  addPost = (petId, post) => {
    let newPet = this.state.pets.find(pet => pet.id === petId)
    newPet.posts.push(post)
    let newPets = this.state.pets.map(pet => {
      if (pet.id !== newPet.id) {
        return pet
      }
      else {
        return newPet
      }
    })

    this.setState({pets: newPets})
  }

  deletePost = (petId, postId) => {
    let newPet = this.state.pets.find(pet => pet.id === petId)
    let posts = newPet.posts.filter(post => post.id !== postId)
    newPet.posts = posts

    let newPets = this.state.pets.map(pet => {
      if (pet.id !== newPet.id) {
        return pet
      }
      else {
        return newPet
      }
    })
    this.setState({pets: newPets})
  }



  createNewPet = (data) => {
    fetch('http://localhost:3000/api/v1/pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(console.log)
    // neeed to send created pet to their page
  }



  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={(props) => <LoginContainer {...props} pets={this.state.pets}  />} />
          <Route path="/login" component={(props) => <LoginContainer {...props} pets={this.state.pets}  />} />
          <Route path="/create_account" component={(props) => <CreateAccount {...props} createNewPet={this.createNewPet} />} />
          <Route path="/home" render={(props) => <UserContainer {...props} pets={this.state.pets} logout={this.logout} addPost={this.addPost} deletePost={this.deletePost}/>}/>
          <Route path="/pet/:id" component={(props) => <UserContainer {...props} pets={this.state.pets} logout={this.logout} addPost={this.addPost} deletePost={this.deletePost}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
