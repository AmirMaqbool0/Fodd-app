import { NavLink, useNavigate } from 'react-router-dom';
import './style.css'
function MealBox({name,poster,id}){
 const navigate=useNavigate();
    return(
       <div className="meal-box" onClick={()=>navigate(`/detail/${id}`)}>
       <div className="meal-box-poster">
        <img src={poster}/>
       </div>
       <div className="meal-box-titel">
        <h3>{name}</h3>
       </div>
        </div>
       
    )
}
export default MealBox;