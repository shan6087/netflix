import React,{useState,useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show,setshow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>500){
                setshow(true)
            }
            else{
                setshow(false)
            }
        })
    },[])
    console.log(show);  
      return (
    <div className={`nav ${show && "nav_black"}`}>
        <img style={{width:'150px'}}
        src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
        alt='netflix logo'
        />
    </div>
  )
}

export default Nav