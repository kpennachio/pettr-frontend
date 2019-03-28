import React from "react";
import DateRequest from "./DateRequest"

class PlayDate extends React.Component {

  state = {
    // gives us the current user information
    currentUser: JSON.parse(localStorage.getItem('currentPetOb')),
    requestedPets: [],
  }

  componentDidMount() {
    let currentUser = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
    this.setState({
      requestedPets: currentUser.sent_requests
    })
  }

  requestPlayDate = () => {
    let currentId = parseInt(localStorage.getItem('currentPet'))
    let requestId = parseInt(this.props.match.params.id)
    fetch('http://localhost:3000/api/v1/play_dates', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "requestor_id": currentId,
        "requested_id": requestId,
        "confirmed_date": false
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState((prevState)=>({
        requestedPets: [...prevState.requestedPets, data]
      }))
    })
  }

  cancelRequest = () => {
    let currentUser = this.state.currentUser
    let pageProfileId = parseInt(this.props.match.params.id)
    let playDateId = this.state.requestedPets.find(pD => pD.requested_id === pageProfileId).id
    // if currentUser sent requests contains a PlayDate with the current pet page ID
    console.log(playDateId);
    fetch(`http://localhost:3000/api/v1/play_dates/${playDateId}`, {
      method: "DELETE"
    })
    .then(res=> this.setState({
      requestedPets: [...this.state.requestedPets].filter(pD => pD.id !== playDateId)
    }))
  }

  renderButton = () => {
    switch (this.props.user) {
      case false:
        // debugger
        let currentUser = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
        // if currentUser sent requests contains a PlayDate with the current pet page ID
        if (!this.state.requestedPets.some(pD => pD.requested_id === parseInt(this.props.match.params.id))) {
          return <button onClick={this.requestPlayDate}>Request Play Date</button>
        }
        else {
          return (
            <div>
              <button onClick={this.cancelRequest}>Requested</button>
              <p>Click to cancel request</p>
            </div>
          )
        }
        break;
      default:
      case true:
        return <DateRequest {...this.props}/>
        break;
    }
  }



  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    )
  }
}
export default PlayDate
