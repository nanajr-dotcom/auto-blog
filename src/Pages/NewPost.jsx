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
            <form onSubmit={handleSubmit} >

                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="type your title" onChange={handleTitleChange} required />
                </div>  


                <div>
                    <label htmlFor="Content">Content</label>
                    <textarea name="content" placeholder="Type your post here" onChange={handleContentChange} required/>
                </div>  


                <div>
                    <button as='input' type="submit" value="Create New Post" variant="primary"/>
                </div>  

            </form>
        )
    }
export default Newpostform;

