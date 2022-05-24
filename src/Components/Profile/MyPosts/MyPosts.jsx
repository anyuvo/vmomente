import React from 'react';
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div >
            <div className={cl.posts}>
                <Post message='Hi, how are you?'/>
                <Post message='I am fine'/>
            </div>
        </div>
    );
};

export default MyPosts;