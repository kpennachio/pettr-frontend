import React from "react"
import { Link } from "react-router-dom";

class DateRequest extends React.Component {


  renderRequest = () => {
    // this gets the IDs of all the playdates that are pending a confirmation_date - for the user page
    let requestIds = this.props.sentPets.filter(pD => {
      if (pD.confirmed_date === false) {
        return pD.id
      }})
            //        [playdate ids]=>search for pet object that matches with the playdate requestor id
    let requestPets = requestIds.map(request => this.props.pets.find(pet => pet.id === request.requestor_id))
    return requestPets.map(rQ => {
      return (
        <div>
          <Link to={`/pet/${rQ.id}`}>{rQ.name}</Link>: <button onClick={() => this.props.confirmDate(rQ.id)}>Confirm</button> <button onClick={() => this.props.rejectDate(rQ.id)}>Reject</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="date-requests">
        <h2>Date Requests</h2>
        {this.renderRequest()}
      </div>
    )
  }
}
export default DateRequest
