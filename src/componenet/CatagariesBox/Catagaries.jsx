import { NavLink } from 'react-router-dom'
import './style.css'

function Catagaries({name,poster}) {
 


  return (
    <NavLink to={`/CatagariesDetails/${name}`}><div className="catagaries-box">
     <div className="catagaries-box-poster">
        <img src={poster} />
     </div>
     <div className="catagaries-box-titel">
        <span>{name}</span>
     </div>
    </div>
    </NavLink>
  )
}

export default Catagaries
