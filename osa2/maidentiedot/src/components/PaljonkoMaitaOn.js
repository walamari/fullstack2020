
import NäytäMaat from './NäytäMaat'
import NäytäYksiMaa from './NäytäYksiMaa'

const PaljonkoMaitaOn = (props, onkoPainettu, setOnkoPainettu) =>{
    if(onkoPainettu !== ''){

      const maat = props.filter(maa => maa.name === onkoPainettu)

      return(
      <div>
        {maat.map(maa => <NäytäYksiMaa key={maa.name} maa={maa}/>)}
      </div>)
    }

    if (props.length === 1 ){
      return(
      <div>
        {props.map(maa => <NäytäYksiMaa key={maa.name} maa={maa}/>)}
      </div>)
    }
  
  
    if (props.length > 0 && props.length < 11 ){
      
      return(
      <div>
        {props.map(maa => <NäytäMaat key={maa.name} maa={maa} onkoPainettu= {setOnkoPainettu} />)}
      </div>)
      
    }
  
    if (props.length > 0){
      return(
      <div>
          <p>Too many matches, specify another filter</p>
      </div>  
      )
    }
  
    return
  
  }

  export default PaljonkoMaitaOn