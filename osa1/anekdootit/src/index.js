import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const course = {
    ekaOtsikko: 'Aneedote of the day',
    tokaOtsikko: 'Aneedote with most votes', 
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] =useState( new Array(6+1).join('0').split('').map(parseFloat))
 
  const handleVote = () => {
    const copy = [...points]
    copy[selected] +=1
    setPoints(copy)
  }

  const isoimmanPaikka = () => {
    let max = 0
    let paikka = 0
    for ( let i = 0; i < points.length; i++) {
      if (points[i]>max){
        max = points[i]
        paikka = i
      }
    } 
    return paikka
  }



  return (
    <div>
      <Header otsikko={course.ekaOtsikko} />
      <p>{props.anecdotes[selected]}</p>

      <Aanet aanet = {points[selected]}/>

      <Button handleClick={ handleVote } text="vote" />
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6) )} text="next anecdote" />
     
      <Header otsikko={course.tokaOtsikko} />
      
      
      <p>{props.anecdotes[isoimmanPaikka()]}</p>

      <Aanet aanet = {points[isoimmanPaikka()]}/>
    </div>
  )
}




const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Aanet = (props) => {
  return (
    <div>
      <p>
        has {props.aanet} votes
      </p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}


 
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)