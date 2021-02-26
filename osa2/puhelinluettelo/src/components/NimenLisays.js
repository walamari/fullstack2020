import React from 'react'
const NimenLisays = (props) => {

    return (
      <div>
        <p>
          {props.henkilö.name} {props.henkilö.number} <button onClick= {props.handlePoista} id={props.henkilö.id}  type="submit">delete</button>
        </p>
      </div>
    )
  }

  export default NimenLisays