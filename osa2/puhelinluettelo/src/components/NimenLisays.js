import React from 'react'
const NimenLisays = (props) => {
    return (
      <div>
        <p>
          {props.henkilö.name} {props.henkilö.number} <button id={props.henkilö.name}  type="submit">delete</button>
        </p>
      </div>
    )
  }

  export default NimenLisays