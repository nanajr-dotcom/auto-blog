import React from 'react';

export default function MasonryPost({post, tagsOnTop}) {
    const style = { backgroundImage: `url("${require(`../Components/Images/${post.image}`)}")` };

    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
    <h2 className="image-title">{post.title}</h2>

            </div>

        </a>
    )
}


