import { useNavigate, useParams } from "react-router-dom";
import FetchData from "../../componenet/Apicall/FetchData";
import MealBox from "../../componenet/Mealbox/MealBox";
import "./style.css";
import Header from "../../componenet/Header/Header";


function CatagariesDetails() {
  const {id}=useParams();
  const {data,loadinng}=FetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
  console.log(data?.meals);
  
  
  return (
    <div className="catagaries-detail">
      <Header/>
      <div className="catagaries-details-heading">
        <h1>Meals</h1>
      </div>
      <div className="Meals">
        {
          !loadinng ?(
          data?.meals?.map((item,index)=>{
            return(
              <div key={index}>
              <MealBox name={item?.strMeal} poster={item?.strMealThumb} id={item?.idMeal}/>
              </div>
            )
          })
          ):(<div>
            <h1>Loading......</h1>
          </div> )
        }
      </div>
    </div>
  );
}

export default CatagariesDetails;
