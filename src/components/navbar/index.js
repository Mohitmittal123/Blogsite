import React ,{useState}from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

/**
* @author
* @function 
**/

const Navbar = (props) => {

     const [search, setSearch] = useState(false);
    
    const submitsearch=(e)=>{
        e.preventDefault();
        alert('Searched');
    }

    const openSearch=()=>{
        setSearch(true);
    }

    const searchClass=search?'searchinput active': 'searchinput';



  return(
    <div className="navbar">
       <ul classname="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        
       
        <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
       
       
       </ul> 
       
       <div className="search">

       <form  onSubmit={submitsearch}>
       <input type="text" className={searchClass} placeholder="Search" />
        <img onClick={openSearch}  className="searchicon" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-32.png" alt="search"/>
        </form>

       </div>
      
       


    </div>
   )

 }

export default Navbar