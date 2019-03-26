import React from "react"

const PetInfo = (props) => {
  let {name, species, hobbies, breed, age, picture} = props.pet
  return (
    <div className="pet-info">
      {name}
      {age}
      {species}
      {breed}
      {hobbies}
      <div className="profile-pic">
        <img src={picture} />
      </div>
    </div>

  )
}

export default PetInfo
