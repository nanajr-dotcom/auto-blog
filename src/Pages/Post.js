import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Post({post}) {
    return (
        <>
        <div>{post.title}</div>
        <div>{post.author}</div>
         <div>{post.content}</div>
        </>

    )
}

export default Post

