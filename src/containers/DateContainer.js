import React from "react"
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


const DateContainer = (props) => {

  const renderDates = () => {
    // debugger
    let requestIds = props.sentPets.filter(pD => {
      if (pD.confirmed_date === true) {
        return pD.id
      }
    })
    let requestorIds = props.requestedPets.filter(pD => {
      if (pD.confirmed_date === true) {
        return pD.id
      }
    })
    let requestPets = requestIds.map(request => props.pets.find(pet => pet.id === request.requestor_id))
    let requestorPets = requestorIds.map(request => props.pets.find(pet => pet.id === request.requested_id))
    let allPets = requestPets.concat(requestorPets)

    return allPets.map(confirmedPet => {
      return (
          <Link to={`/pet/${confirmedPet.id}`}>
            <Card className="suggestion-card">
              <Image className="suggestion-pic" src={confirmedPet.picture} />
              <Card.Content>
                <Card.Header>{confirmedPet.name}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
      )
    })
  }


  return (
  <div className="date-container">
    <h4>My Dates</h4>
      <Card.Group>
        {renderDates()}
      </Card.Group>
  </div>
  )
}

export default DateContainer
