import React from 'react';
import cl from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={cl.content}>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={cl.item}>post 1</div>
                <div className={cl.item}>post 2</div>
            </div>
        </div>
    );
};

export default MyPosts;