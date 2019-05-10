import React, { Component, Fragment } from 'react'
import { Menu } from 'semantic-ui-react'

import { Link } from "react-router-dom";

import PetProfile from '../components/PetProfile'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SuggestionContainer from './SuggestionContainer'

class UserContainer extends Component {


  handleItemClick = () => {

  }

  // finds pet from id in the URL
  findPet = () => {
    let pet = ""
    if (this.props.match.params.id) {
      pet = this.props.pets.find(pet => pet.id === parseInt(this.props.match.params.id))
    }
    else if (localStorage.getItem('currentPet')) {
      pet = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
    }
    return pet
  }


  renderUserContainer = () => {
    if (localStorage.getItem('currentPet')) {
      return(
        <Fragment>
           <div className="">
             <PetProfile {...this.props} pet={this.findPet()} addPost={this.props.addPost} deletePost={this.props.deletePost}/>
             <SuggestionContainer {...this.props} pet={this.findPet()} pets={this.props.pets}/>
           </div>
        </Fragment>
      )
    }
    // else {
    //   this.props.history.push("/login")
    // }
  }

  render() {

    return (
      <div className="user-container">
        <div className="user-padding">
          <div className="header-navbar">
            <Header />
            <NavBar logout={this.props.logout}/>
          </div>
          {this.renderUserContainer()}
        </div>
      </div>
    )
  }
}

export default UserContainer;


   // <Link to="/login" onClick={this.props.logout}>Logout</Link>


   // <Menu fixed="top" secondary className="header" size="massive">
   //   <Menu.Item
   //     id="logo"
   //     name="pettr"
   //     context="Pettr"
   //     onClick={this.handleItemClick}
   //   />
   //   <Menu.Item
   //     as={Link} to={`/pet/${localStorage.getItem('currentPet')}`}
   //     name="home"
   //     context="Home"
   //   />
   //   <Menu.Item
   //     as={Link} to='/dashboard'
   //     name="logout"
   //     context="Logout"
   //   />
   // </Menu>
