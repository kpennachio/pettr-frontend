import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom";

class DateRequest extends React.Component {


  state = {}

// need to finish tomorrow
  // rejectDate = () => {
  //   fetch(`http://localhost:3000/api/v1/play_dates/${playDateId}`, {
  //     method: "DELETE"
  //   })
  //   .then(res=> this.setState({
  //     requestedPets: [...this.state.requestedPets].filter(pD => pD.id !== playDateId)
  //   }))
  // }


  renderRequest = () => {
    let requestIds = this.props.pet.received_requests.filter(pD => {
      if (pD.confirmed_date === false) {
        return pD.id
      }
    })
    // debugger
    let requestPets = requestIds.map(request => this.props.pets.find(pet => pet.id === request.id))
    return requestPets.map(rQ => {
      return (
        <div>
          {rQ.name}: <button >Confirm</button> <button onClick={this.rejectDate}>Reject</button>
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
