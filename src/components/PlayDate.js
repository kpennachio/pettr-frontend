import React, { Fragment } from "react";
import DateRequest from "./DateRequest"
import DateContainer from "../containers/DateContainer"

class PlayDate extends React.Component {

  state = {
    // gives us the current user information
    requestedPets: [],
    sentPets: []
  }

  componentDidMount() {
    let currentUser = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
    this.setState({
      requestedPets: currentUser.sent_requests,
      sentPets: currentUser.received_requests
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

  confirmDate = (requestorPetId) => {
    let playDateId = this.state.sentPets.find(pD => pD.requestor_id === requestorPetId).id
    fetch(`http://localhost:3000/api/v1/play_dates/${playDateId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "confirmed_date": true
      })
    })
    .then(res=>res.json())
    .then(data => {
      let oldPlayDate = this.state.sentPets.find(pD => pD.id === data.id)
      let index = this.state.sentPets.indexOf(oldPlayDate)
      this.state.sentPets.splice(index, 1)
      // debugger
      this.setState((prevState)=>({
        sentPets: [...prevState.sentPets, data]
      }))
    })
    }

    rejectDate = (requestorPetId) => {
      // let pageProfileId = parseInt(this.props.match.params.id)
      console.log(this.state.sentPets);
      let playDateId = this.state.sentPets.find(pD => pD.requestor_id === requestorPetId).id
      // debugger
      fetch(`http://localhost:3000/api/v1/play_dates/${playDateId}`, {
        method: "DELETE"
      })
      .then(res=> this.setState({
        sentPets: [...this.state.sentPets].filter(pD => pD.id !== playDateId)
      }))
    }



  renderButton = () => {
    switch (this.props.user) {
      case false:
        // debugger
        // let currentUser = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
        // // if currentUser sent requests contains a PlayDate with the current pet page ID
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
        // break;
      default:
      case true:
        return (
          <Fragment>
            <DateRequest {...this.props} confirmDate={this.confirmDate} rejectDate={this.rejectDate} sentPets={this.state.sentPets}/>
            <DateContainer {...this.props} sentPets={this.state.sentPets} requestedPets={this.state.requestedPets} />
          </Fragment>
        )
        // break;
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
