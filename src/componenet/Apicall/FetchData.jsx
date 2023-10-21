import { useEffect, useState } from "react";



function FetchData(url) {
    const [data,setData]=useState();
 const [loading,setLoading]=useState(true);


 const fetchdata= async ()=>{
  const result= await fetch(url).then(responce => responce.json())
  setData(result)
  setLoading(false)
 
  
 }
 useEffect(()=>{
fetchdata();
 },[])

 
  return {data,loading}
}

export default FetchData;
