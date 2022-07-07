import React from "react";

const Post = ({avatar, message, likes}) => {
    return (
        <article className="post">
            <a href='/' className="post__avatar">
                <img src={avatar} alt="" className="post__image" />
            </a>
            <p className="post__text">{message}</p>
            <span className="post__likes">{likes}</span>
        </article>
    )
}

export default Post;