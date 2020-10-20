import React from 'react'
import trending from '../mocks/trending'

import PostMasonry from './PostMasonry'


const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3 !important',
        height: '500px'
    }

}

const mergeStyles = function (posts, config){
    posts.forEach((post, index) =>{
        post.styles = config[index]
    })
}

mergeStyles(trending, trendingConfig)
function Blog() {
    return (
        <section className="container">
           <div className="row">
               <h1>Trending Posts</h1>
               <PostMasonry posts={trending} columns={3}/>
           </div> 
        </section>
    )
}

export default Blog
