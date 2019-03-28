import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'


const DateContainer = (props) => {

  const renderDates = () => {
    console.log(props);
    // debugger
    let requestIds = props.sentPets.filter(pD => {
      if (pD.confirmed_date === true) {
        return pD.id
      }
    })
    let requestPets = requestIds.map(request => props.pets.find(pet => pet.id === request.requestor_id))
    return requestPets.map(confirmedPet => {
      return (
        <div>
          <Link to={`/pet/${confirmedPet.id}`}>
            <Card className="suggestion-card">
              <Image className="suggestion-pic" src={confirmedPet.picture} />
              <Card.Content>
                <Card.Header>{confirmedPet.name}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
        </div>
      )
    })
  }


  return (
  <div className="date-container">
    Date Container
    {renderDates()}
  </div>
  )
}

export default DateContainer
