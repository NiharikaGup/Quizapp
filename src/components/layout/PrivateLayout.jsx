import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
function PrivateLayout (props) {
    const navigate = useNavigate();
    
    useEffect(() => {
        let temLogin = window.localStorage.getItem('login') || false;
        if(!temLogin){
            navigate('/login') 
        }
    }, [])

    return (<>
    {props.children}
    </>)
   
    
}

export default PrivateLayout

