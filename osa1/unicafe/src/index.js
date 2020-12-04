import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.nimi} {props.lasku }
      </p>
    </div>
  )
}

const Statistics = (props) => {
  const nimiHyva = props.course.parts.hyva
  const nimiNormi = props.course.parts.normi
  const nimiHuono = props.course.parts.huono
  const nimiKaikki = props.course.parts.kaikki
  const nimiKeskiarvo = props.course.parts.keskiarvo
  const nimiPositiiviset = props.course.parts.positive
  const eiPalautetta = props.course.parts.eiPalautetta

  const plussa = props.propsGood
  const normi = props.propsNatural
  const miinus = props.propsBad
  
  if(plussa>0 || normi>0 || miinus>0 ) {
    return (
      <div>
        <table >
          <tbody >
            <tr>
              <td><StatisticLine nimi = {nimiHyva}/></td>
              <td><StatisticLine lasku = {plussa}/></td>
            </tr>
            <tr>
              <td><StatisticLine nimi = {nimiNormi}/></td>
              <td><StatisticLine lasku = {normi}/></td>
            </tr>
            <tr>
              <td><StatisticLine nimi = {nimiHuono}/></td>
              <td><StatisticLine lasku = {miinus}/></td>
            </tr>
            <tr>
              <td><StatisticLine nimi = {nimiKaikki}/></td>
              <td><StatisticLine lasku = {plussa + normi + miinus}/></td>
            </tr>
            <tr>
              <td><StatisticLine nimi = {nimiKeskiarvo}/></td>
              <td><StatisticLine lasku = {(plussa - miinus)/ (plussa + normi + miinus)}/></td>
            </tr>
            <tr>
              <td><StatisticLine nimi = {nimiPositiiviset}/></td>
              <td><StatisticLine lasku = {plussa / (plussa + normi + miinus) * 100  + " %" } /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      <StatisticLine nimi = {eiPalautetta} />
    </div>
  )


}


const App = () => {
  
  const course = {
    gfOtsikko: 'give feedback',
    stOtsikko: 'statistics', 
    parts: { hyva: 'good',
             normi: 'neutral',
             huono:'bad',
             kaikki:'all',
             keskiarvo:'average',
             positive: 'positive',
             eiPalautetta: 'No feedback given'
            }
    
  }

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <Header otsikko={course.gfOtsikko} />

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Header otsikko={course.stOtsikko} />

      <Statistics course = {course} propsGood = {good} propsNatural = {neutral} propsBad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)