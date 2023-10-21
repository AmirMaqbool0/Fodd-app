import { Search } from 'lucide-react'
import './style.css'
import Homepic from '../../assets/homepic.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomeBanner(){
const [input,setInput]=useState('');
const navigate=useNavigate()
const onSubmit=(e)=>{
if(e.key=="Enter"){
  navigate(`/search/${input}`)
  setInput('')
}

}
const updateInput=(e)=>{
  setInput(e.target.value)
}
const onSubmit2=()=>{
 navigate(`/search/${input}`)
 setInput('')
}
console.log(input)
    return(
        <div className="home-banner">
      <div className="poster">
        <img src={Homepic}/>
        <div className="layer"></div>
      </div>
      <div className="content">
        <div className="home-banner-search">
         <input type="text" placeholder='Search....' onChange={updateInput} onKeyUp={onSubmit} />
         <button onClick={onSubmit2}><Search /></button>
        </div>
        <div className="text">
          <span>What are your favorite cuisines?</span>
        </div>
      </div>
     
    </div>
    )
}
export default HomeBanner