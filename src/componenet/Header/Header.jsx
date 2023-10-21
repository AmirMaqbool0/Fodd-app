import { Home } from 'lucide-react';
import './style.css'
import { useNavigate } from 'react-router-dom';

function Header(){
 const navigate=useNavigate();
    return(
        <div className='header' onClick={()=>navigate('/')}>
            <div className="logo">
                <h4>A.M Foods</h4>
            </div>
            <div className="home-btn">
            <Home color="#f8f7f7" />
            </div>
        </div>
    )
}
export default Header;