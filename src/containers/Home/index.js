import React from 'react';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import RecentPost from '../RecentPost';

import './style.css';

const Home=(props)=>{

    const gallaryHeight=450;
      
    const gallaryStyle={
        height:gallaryHeight+'px',
        overflow:'hidden'
    }

    const sideImageHeight=gallaryHeight/3;


    return(
       <div>
         <Card>
          
           <div className="gallarypost" style={{gallaryStyle}} >
          
                <section >
           <div >
             <img src="https://c4.wallpaperflare.com/wallpaper/630/144/936/girl-model-blonde-sports-wallpaper-preview.jpg" alt="image"  style={{width:'125%'}}
             
              
             />
             
             <div className="text" style={{textAlign:"center"}}>
               <h1 >Be fit</h1>
                 <span>posted on july,21 2018</span>
                 <p>Fitness is not just about getting your body in shape</p>
                 <p>its also a habit that keeps u motivated all the time</p>             
             </div>
              
               
                
              
                
               
           </div>
           


</section>
<SideBar/>
        
              
            </div>
        </Card>

           
        
        
        <section className="HomeContainer">
             <RecentPost/>
             

               
           
           
           </section>
          
       </div>
    );
}

export default Home;
