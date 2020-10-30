import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { postArray } from "./Posts"; //Import postArray from PostArray.js
import moment from "moment"

const Newpostform = ({ setUserLoggedIn}) =>{

    

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }

    const handleContentChange = e => {
        setContent(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault(); 

        //counting the number of item in the post array
        const numberOfPost = postArray.length; 

        const freshPost = {
            id: numberOfPost + 1,
            title: title,
            author: "Nana Asamoah Jnr",
            content: content,
            date:moment().format('MMMM DD YYYY, h:mm:ss a') ,
            upvote: 0,
            downvote: 0,
        }

        postArray.push(freshPost)


    }

    return (
        <form className="container"  onSubmit={handleSubmit} >

            <div className="form-group">
                    <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" placeholder="type your title" onChange={handleTitleChange} required />
                </div>  


            <div className="form-group" >
                    <label htmlFor="Content">Content</label>
                <textarea className="form-control"  name="content" placeholder="Type your post here" onChange={handleContentChange} required/>
                </div>  



            <div className="form-group" >
                   
                <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block __web-inspector-hide-shortcut__"
                    value="Create New Post" variant="primary"
                    
                >Create New Post</button>
                </div>  

            </form>
        )
    }
export default Newpostform;

