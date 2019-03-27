import React from "react";

class PlayDate extends React.Component {

  state = {
    // gives us the current user information
    currentUser: JSON.parse(localStorage.getItem('currentPetOb')),
    pageProfileId: parseInt(this.props.match.params.id)

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
    .then(console.log)
  }

  cancelRequest = () => {
    let currentUser = this.state.currentUser
    let pageProfileId = parseInt(this.props.match.params.id)
    let playDateId = currentUser.sent_requests.find(pD => pD.requested_id === pageProfileId)
    // if currentUser sent requests contains a PlayDate with the current pet page ID
    console.log("pd", currentUser.sent_requests.find(pD => pD.requested_id === pageProfileId));
    fetch(`http://localhost:3000/api/v1/play_dates/${playDateId}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
  }

  renderButton = () => {
    switch (this.props.user) {
      case false:
        let currentUser = this.state.currentUser
        let pageProfileId = parseInt(this.props.match.params.id)
        // if currentUser sent requests contains a PlayDate with the current pet page ID
        console.log(currentUser.sent_requests.some(pD => pD.requested_id === pageProfileId));
        if (!currentUser.sent_requests.some(pD => pD.requested_id === pageProfileId)) {
          return <button onClick={this.requestPlayDate}>Request Play Date</button>
        } else {
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
        return <h5>My Dates</h5>
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
