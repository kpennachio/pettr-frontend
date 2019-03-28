import React from "react";
import Suggestion from '../components/Suggestion'


class SuggestionContainer extends React.Component {

  shufflePets = () => {
    let array = this.props.pets
    let i = array.length - 1
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
    // this.setState({
    //   suggested: array
    // })
  }

  renderSuggestions = () => {
    // need to map
    let filteredPets = this.shufflePets().filter(pet => {
      if (pet.id !== parseInt(localStorage.getItem('currentPet')) && pet.id !== this.props.pet.id) {
        return pet
      }
    })
    return filteredPets.slice(0,4).map(pet => {
      // if (pet.name !== "Oreo") {
        return <Suggestion key={pet.id} pet={pet}/>
      }
    )
  }

  render() {
    return (
      <div className="suggestion-container">
        <h4>Suggestions</h4>
        {this.renderSuggestions()}
      </div>
    )
  }
}
export default SuggestionContainer
