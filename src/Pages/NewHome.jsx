import React, { useState } from 'react';
import { postArray } from "./Posts";
import Post from "./Post";

function NewHome() {
    const [posts, setPosts] = useState(postArray);

    return (
        <div>
            {posts.map(post=>{
               return (
                   <Post key={post.id}  post={post}/>
               )
                  
               

                  
              
            })}
              
        </div>
    )
}

export default NewHome







