import React from 'react'
import trending from '../mocks/trending'
import PostMasonry from './PostMasonry'

function Blog() {
    return (
        <section className="container">
           <div className="row">
               <h2>Trending Posts</h2>
               <PostMasonry posts={trending} columns={3}/>
           </div> 
        </section>
    )
}

export default Blog
