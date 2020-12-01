import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}


const Content = (props ) => {
  return (
    <div>
      <Part osa = {props.osa1} tehtavia = {props.exercises1} />
      <Part osa = {props.osa2} tehtavia = {props.exercises2} />
      <Part osa = {props.osa3} tehtavia = {props.exercises3} />
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>
        {props.osa}, {props.tehtavia}
      </p>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header otsikko={course}/>      
      <Content osa1={part1} osa2={part2} osa3={part3} exercises1={exercises1}
       exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={ exercises2} exercises3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))