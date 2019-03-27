import React from "react";

class PlayDate extends React.Component {

  state = {
    request: false
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
    .then(playDate => {
      this.setState({
        request: true
      })
    })
  }

  renderButton = () => {
    switch (this.props.user) {
      case false:
        if (this.state.request === false) {
          return <button onClick={this.requestPlayDate}>Request Play Date</button>
        } else {
          return <button>Requested</button>
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
