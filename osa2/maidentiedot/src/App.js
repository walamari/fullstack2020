import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterItems from './components/FilterItems'
import PaljonkoMaitaOn from './components/PaljonkoMaitaOn'


const App = () => {
  const [valtiot, setMaat] = useState([])
  const [filtersana, setShowAll] = useState('')
  const [onkoPainettu, setOnkoPainettu] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setMaat(response.data)
      })
  }, [])
  console.log('render', valtiot.length, 'valtiota')

  console.log(valtiot)


  const handleFilter = (event) =>{
    event.preventDefault()
    setShowAll(event.target.value)
  }

  const montakomaata = filtersana === ('')  ? [] : FilterItems(valtiot , filtersana)
   
  console.log(montakomaata)
  return (
    <div>
      <p> find countries <input onChange={handleFilter}/></p>
        {PaljonkoMaitaOn(montakomaata,onkoPainettu,setOnkoPainettu )}
    </div>
  )
}


export default App