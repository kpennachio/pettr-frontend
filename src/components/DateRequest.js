import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom";

class DateRequest extends React.Component {


  state = {
    sentPets: []
  }

  componentDidMount() {
    let currentUser = this.props.pets.find(pet => pet.id === parseInt(localStorage.getItem('currentPet')))
    this.setState({
      sentPets: currentUser.received_requests
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


  renderRequest = () => {
    // this gets the IDs of all the playdates that are pending a confirmation_date - for the user page
    let requestIds = this.state.sentPets.filter(pD => {
      if (pD.confirmed_date === false) {
        return pD.id
      }})
            //        [playdate ids]=>search for pet object that matches with the playdate requestor id
    let requestPets = requestIds.map(request => this.props.pets.find(pet => pet.id === request.requestor_id))
    return requestPets.map(rQ => {
      return (
        <div>
          {rQ.name}: <button onClick={() => this.confirmDate(rQ.id)}>Confirm</button> <button onClick={() => this.rejectDate(rQ.id)}>Reject</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="date-requests">
        <h5>Date Requests</h5>
        {this.renderRequest()}
      </div>
    )
  }
}
export default DateRequest
