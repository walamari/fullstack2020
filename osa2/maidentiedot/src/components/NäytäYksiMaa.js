
import NäytäKieli from './NäytäKieli'

const NäytäYksiMaa = (props) =>{
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


export default NäytäYksiMaa