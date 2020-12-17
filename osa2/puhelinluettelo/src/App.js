import React, { useState, useEffect } from 'react'
import NimenLisays from './components/NimenLisays'
import FilterItems from './components/FilterItems'
import TarkistaNimi from './components/TarkistaNimi'
import numerotService from './services/numerot.js'
import Notification from './components/Notification.js'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState([])
  const [ newNumber, setNewNumber ] = useState('')
  const [filtersana, setShowAll] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    console.log('effect')
    numerotService
    .getAll()
    .then(initialNumerot  => {
        setPersons(initialNumerot)
      })
  }, [])

  console.log("persons")
  console.log(persons)
  const namesToShow = filtersana.length<1  ? persons : FilterItems(persons , filtersana)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const handleFilter = (event) =>{
    event.preventDefault()
    setShowAll(event.target.value)
  }


  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
      id: newName,
    }

    if(TarkistaNimi(numberObject, persons) === -1){
      numerotService
      .create(numberObject)
      .then(returnedNumber => {
        setPersons(persons.concat(returnedNumber))
        setNewName('')
        setNewNumber('')
      })
  
      setErrorMessage(
        `Added ${numberObject.name}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)

    }
    else{
      const indeksi = (TarkistaNimi(numberObject, persons))

      if(window.confirm(newName + " is already added to phonebook, replace the old number with a new one?")){
        const changeObject = {
          name: persons[indeksi].name,
          number: numberObject.number,
          id: persons[indeksi].id,
        }
        
    
        numerotService
        .korvaa( changeObject )
        .then (response => {
          setPersons(persons.map(person => person.id === changeObject.id ? changeObject : person))
        })
        setErrorMessage(
          `${numberObject.name} number change`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
  }


  const handlePoista =  (event) => {
    if(window.confirm("Delete "+ event.target.id + " ?" )){
      numerotService
      .poista(event.target.id)
      .then (response => {
        setPersons(persons.filter(person => person.id !== event.target.id))
      })
      setErrorMessage(
        `Deleted ${event.target.id}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    } 
  }


  return (
    <div>
      <h2>Phonebook</h2> 
      <Notification message={errorMessage}/>
      <p> filter shown with: <input onChange={handleFilter}/></p>
      <h3>add a new</h3>
      <form onSubmit={addNumber}>
        <div>
         <p> name: <input value={newName} onChange={handleNameChange}/></p>
         <p> number: <input value={newNumber} onChange={handleNumberChange}/></p>
        </div>
        <div >
          <button  type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
        <div onClick= {handlePoista}>
          {namesToShow.map(henkilö => <NimenLisays key={henkilö.name} henkilö={henkilö}/>)}
        </div>
    </div>
  )
}

export default App
