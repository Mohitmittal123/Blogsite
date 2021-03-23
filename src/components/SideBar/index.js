import React ,{useState,useEffect} from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import {NavLink} from 'react-router-dom';




/**
* @author
* @function SideBar
**/

const SideBar = (props) => {

  const[posts,setPost] = useState([]);

  useEffect(()=>{
    const posts=blogPost.data;
       setPost(posts);
  },[posts]);



  return(
   
     <div className="sidebarcontainer" style={{
       width:props.width
     }}>
     <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box' }} >
      <div className="cardheader">
       <span>About Us</span>
       
      
      
      </div>
        <div className="profileimagecontainer">
        <img src="http://nitj.ac.in/tbi/images/nitjlogo.png" alt="image"/>
        
        </div>
         <div className="cardbody">
          <p className="personalbio">My name is Mohit Mittal from NITJ and i am aspiring to be a frontend developer..:)</p>
         
         
          </div>
      
     </Card>


     <Card >
      <div className="cardheader">
       <span>Social Network</span>
      
      
      </div>
       </Card>

       <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box' }} >
       <div className="cardheader">
        <span>Recent Post</span>
       
       
       </div>

         <div className="recentposts">
                    {
                      posts.map(post=>{
                        return(
                          <NavLink key={post.id} to={`/post/${post.id}`}>
                          <div className="recentpost">
           
                          <h3 >{post.blogTitle}</h3>
                           <span>{post.postedOn}</span>
                            
                           
                           </div>
                          
                          </NavLink>
                         

                        );
                      })

                    }
         
           </div>
        </Card>
     
      </div>
    
    
   )

 }

export default SideBar