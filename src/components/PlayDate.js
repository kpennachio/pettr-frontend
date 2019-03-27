import React from "react";

class PlayDate extends React.Component {

  renderButton = () => {
    switch (this.props.user) {
      case false:
        return <button>Request Play Date</button>
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
