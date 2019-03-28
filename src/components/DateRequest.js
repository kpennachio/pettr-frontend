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

// need to finish tomorrow
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


  renderRequest = () => {
    // this gets the IDs of all the playdates that are pending a confirmation_date - for the user page
    let requestIds = this.state.sentPets.filter(pD => {
      if (pD.confirmed_date === false) {
        return pD.id
      }
    })
    //                [playdate ids]=>
    let requestPets = requestIds.map(request => this.props.pets.find(pet => pet.id === request.requestor_id))
    return requestPets.map(rQ => {
      return (
        <div>
          {rQ.name}: <button >Confirm</button> <button onClick={() => this.rejectDate(rQ.id)}>Reject</button>
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
