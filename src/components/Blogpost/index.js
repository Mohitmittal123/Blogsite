import React ,{useState,useEffect}from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  
 const[post,setPost]=useState({
  id:"",
  blogCategory:"",
  blogTitle:"",
  slug:"",
  postedOn:"",
  author:"",
  blogImage:"",
  blogText:""
 });
 const[postId,setPostId]=useState('');

  useEffect(()=>{
    const postId=props.match.params.postId;
      const post=blogPost.data.find(post=>post.id==postId);

       setPost(post);
       setPostId(postId);
  },[post,props.match.params.postId]);

  if(post.blogImage=="")return null;

   


  return(
    
    <div className="blogpostContainer">
    <Card>
     <div className="blogHeader">
     <span className="blogCategory">{post.blogCategory}</span>
      <h1 className="posttitle">{post.blogTitle}</h1>
       <span className="postedby"> {post.postedOn} by {post.author} </span>
      </div>

       <div className="postimagecontainer">
        <img src={require('../../blogPostImages/'+ post.blogImage).default} alt="post image"/>
       
        </div>

         <div className="postcontent">
           <h3>{post.blogTitle}</h3>
            <p> {post.blogText}</p>
         </div>
     
    
     </Card>
    
    </div>

   )

 }

export default BlogPost