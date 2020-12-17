import NäytäKieli from './NäytäKieli'

const NäytäMaat = (props) =>{

    const handleClick = (event) => {
      event.preventDefault()

      if(props.maa.name === event.target.id){

        
        console.log(props.maa.name)
        console.log(props)

          return(
            <div>
              <h1>{props.maa.name}</h1>
              <p>capital {props.maa.capital} </p>
              <p>population {props.maa.population} </p>
              <h2>languages</h2>
              <ul>
                {props.maa.languages.map(kieli => <NäytäKieli key={kieli.name} kieli={kieli}/>)}
              </ul> 
              <p> 
                <img src={props.maa.flag} alt="lipun kuvan" width="150"
                 height="80"/>
              </p> 
            </div>
          )
      }      
    }



  return(
    <form >
      <div id="poista">
        <p name="p"  >{props.maa.name} <button onClick= {handleClick} id={props.maa.name} type="submit">show</button> </p>
      </div>
    </form>
  )
}
  


  export default NäytäMaat