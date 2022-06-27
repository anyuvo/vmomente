import React from 'react';
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {reduxForm, Field} from 'redux-form';

const MyPosts = (props) => {

    let postsElements = props.posts.map((element, i) => <Post message={element.message} key={element.id}
                                                              likesCount={element.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;