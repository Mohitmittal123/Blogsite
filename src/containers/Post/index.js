import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/Blogpost';
import SideBar from '../../components/SideBar';

/**
* @author
* @function Post
**/

const Post = (props) => {
  console.log(props);
  return(
    <section className="container">
     <BlogPost {...props}/>
     <SideBar {...props}/>
     
    
    
    
    
    </section>
   )

 }

export default Post;