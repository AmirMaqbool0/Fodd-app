import { useParams } from "react-router-dom";
import "./style.css";
import FetchData from "../../componenet/Apicall/FetchData";
import {CheckCircle2} from 'lucide-react';
import Header from "../../componenet/Header/Header";
function Details() {
  const { id } = useParams();
  const { data, loading } = FetchData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  console.log(data?.meals?.[0]);
  return (
    <div className="main-detail-section">

    <Header/>
      <div className="detail-upper-section">


        <div className="detail-poster">
            <img src={data?.meals?.[0]?.strMealThumb} />
        </div>

        <div className="mael-detail-text">

        <div className="meal-detail-name">
            <h3>{data?.meals?.[0]?.strMeal}</h3>
          </div>
          <div className="catagarie-name">
            <h5>Category :</h5>
            <span>{data?.meals?.[0]?.strCategory}</span>
          </div>
          <div className="catagarie-name">
            <h5>Source:</h5>
            <span>{data?.meals?.[0]?.strSource}</span>
          </div>
          <div className="ingrideants-box">
            <div className="ingrdiant-heading">
              <h6>Ingredients</h6>
            </div>
             <div className="ingridiant-name">
              <div className="ingridiant-no">
               <h4>1</h4>
               <span>{data?.meals?.[0]?.strIngredient1}</span>
              </div>
             
             
              <div className="ingridiant-no">
               <h4>2</h4>
               <span>{data?.meals?.[0]?.strIngredient2}</span>
              </div>
              <div className="ingridiant-no">
               <h4>3</h4>
               <span>{data?.meals?.[0]?.strIngredient3}</span>
              </div>
              <div className="ingridiant-no">
               <h4>4</h4>
               <span>{data?.meals?.[0]?.strIngredient4}</span>
              </div>
              <div className="ingridiant-no">
               <h4>5</h4>
               <span>{data?.meals?.[0]?.strIngredient5}</span>
              </div>
              <div className="ingridiant-no">
               <h4>6</h4>
               <span>{data?.meals?.[0]?.strIngredient6}</span>
              </div>
              <div className="ingridiant-no">
               <h4>7</h4>
               <span>{data?.meals?.[0]?.strIngredient7}</span>
              </div>
              <div className="ingridiant-no">
               <h4>8</h4>
               <span>{data?.meals?.[0]?.strIngredient8}</span>
              </div>
              <div className="ingridiant-no">
               <h4>9</h4>
               <span>{data?.meals?.[0]?.strIngredient9}</span>
              </div>
              <div className="ingridiant-no">
               <h4>10</h4>
               <span>{data?.meals?.[0]?.strIngredient10}</span>
              </div>
              <div className="ingridiant-no">
               <h4>11</h4>
               <span>{data?.meals?.[0]?.strIngredient11}</span>
              </div>
              <div className="ingridiant-no">
               <h4>12</h4>
               <span>{data?.meals?.[0]?.strIngredient12}</span>
              </div>
              <div className="ingridiant-no">
               <h4>13</h4>
               <span>{data?.meals?.[0]?.strIngredient13}</span>
              </div>
             
            
             </div>

          </div>


        </div>


      </div>


      <div className="measure-heading">
            <h3>Measure</h3>
        </div>


      <div className="measure-setion">
        

      <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure1}</h4>
                </div>
           
            </div>
           
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure2}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure3}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure4}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure5}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure6}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure7}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure8}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure9}</h4>
                </div>
           
            </div>
           
            <div className="detail-measure">
                
                <div className="measure-logo">
                <span>{<CheckCircle2 color="#26ae24" />}</span>
                </div>
                <div className="measure-text">
                 <h4>{data?.meals?.[0]?.strMeasure10}</h4>
                </div>
           
            </div>



      </div>


      <div className="instruction-section">

      <div className="instrution-heading">
                      <h3>Instructions</h3>
                    </div>
                    <p>{data?.meals?.[0]?.strInstructions}</p>
                    <div className="youtube-link">
                      <h4>YouTube:</h4>
                      <a href={data?.meals?.[0]?.strYoutube} _blank>{data?.meals?.[0]?.strYoutube}</a>
                    </div>

      </div>


    </div>
  );
}
export default Details;
