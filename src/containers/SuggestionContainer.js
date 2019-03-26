import React from "react";
import Suggestion from '../components/Suggestion'


class SuggestionContainer extends React.Component {


  renderSuggestions = () => {
    // need to map
    return <Suggestion />
  }

  render() {
    return (
      <div className="suggestion-container">
        {this.renderSuggestions()}
      </div>
    )
  }
}
export default SuggestionContainer
