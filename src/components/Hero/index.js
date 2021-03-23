import React from 'react'
import Logo from '../Logo';
import Navbar from '../navbar';
import Card from '../UI/Card';
import './style.css';
/**
* @author
* @functioimport Hero
**/

const Hero = (props) => {
  return(
    <div>
      <Card style={{padding:'50px 0'}}>
      <Logo/>
      <Navbar/>
      

        </Card>
    
     </div>
   )

 }

export default Hero;