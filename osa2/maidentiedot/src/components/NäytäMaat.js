import NäytäKieli from './NäytäKieli'

const NäytäMaat = (props ) =>{

    const handleClick = (event) => {
      event.preventDefault()

      if(props.maa.name === event.target.id){
        props.onkoPainettu(props.maa.name)
        console.log(props.maa.name)
        console.log(props)
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