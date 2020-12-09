import React from 'react'

const Total = (props) => {

    const taulukko = props.course.parts.map(osa => osa.exercises)
    const laskuri = (accumulator, currentValue) => accumulator + currentValue
    const taulukkoKasassa = taulukko.reduce(laskuri)
  
    return (
      <div>
        <p>
          Number of exercises {taulukkoKasassa}
        </p>
      </div>
    )
  }

export default Total