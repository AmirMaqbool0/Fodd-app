import { useParams } from "react-router-dom";
import FetchData from "../../componenet/Apicall/FetchData";
import HomeBanner from "../../componenet/HomeBanner/HomeBanner";
import MealBox from "../../componenet/Mealbox/MealBox";


import "./style.css";
import { useEffect, useState } from "react";
import Header from "../../componenet/Header/Header";

function Search() {
  const {id}=useParams();
  const [data,setData]=useState('')
  useEffect(()=>{
   fetchDtaa();
},[id])
const fetchDtaa=async ()=>{
  const result= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
  .then(res => res.json())
  console.log(result)
setData(result)
}

  return (
    <div className="search">
      <Header/>
     <HomeBanner/>
     <div className="search-section">
      <div className="search-section-heading">
        <h3>Meals</h3>

      </div>
      <div className="search-section-meals">
        {
         data?.meals?.map((item,index)=>{
          return(
            <div key={index}> 
            <MealBox name={item?.strMeal} poster={item?.strMealThumb} id={item?.idMeal}/>
            </div>
          )
         }) 
        }
      </div>
     </div>
    </div>
  );
}

export default Search;
