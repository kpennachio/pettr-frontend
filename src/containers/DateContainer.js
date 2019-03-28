import React from "react"
import { BrowserRouter as Route, Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'


const DateContainer = (props) => {

  const renderDates = () => {
    let requestIds = props.pet.received_requests.filter(pD => {
      if (pD.confirmed_date === true) {
        return pD.id
      }
    })
    let requestPets = requestIds.map(request => props.pets.find(pet => pet.id === request.id))
    return requestPets.map(rQ => {
      return (
        <div>
          <Link to={`/pet/${rQ.id}`}>
            <Card className="suggestion-card">
              <Image className="suggestion-pic" src={rQ.picture} />
              <Card.Content>
                <Card.Header>{rQ.name}</Card.Header>
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
