import React from 'react';
import cl from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={cl.item}>
            {props.message}
        </div>
    );
};

export default Post;