import { useEffect, useState } from 'react'
import './style.css'
import Homepic from '../../assets/homepic.jpg'
import { Search} from 'lucide-react';
import Catagaries from '../../componenet/CatagariesBox/Catagaries';
import HomeBanner from '../../componenet/HomeBanner/HomeBanner';
import Header from '../../componenet/Header/Header';

function Home() {
 const [data,setData]=useState();
 const [loading,setLoading]=useState(true);


 const fetchdata= async ()=>{
  const result= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(responce => responce.json())
  setData(result)
  setLoading(false)
 
  
 }
 useEffect(()=>{
fetchdata();
 },[])

 
  return (

    <div className="home">
      <Header/>
  <HomeBanner/>
    <div className="catagaries-section">
      <div className="catagarise-heading">
        <h1>CATEGORIES</h1>
      </div>
      
     
     
      { !loading ?( <div className="catadaries-boxes">
        {
          data?.categories?.map((item,index)=>{
           
            return(
              <div key={index}>
                <Catagaries name={item?.strCategory}
                poster={item?.strCategoryThumb                }
                />
                </div>
            )
          })
        }
       </div>):(
        <div> <h1>Loading....</h1></div>
       )
}
      
    </div>
    </div>
    
  )
}

export default Home
