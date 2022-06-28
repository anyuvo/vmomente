import React from 'react';
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const validationSchemaLoginForm = Yup.object().shape({

    newPostText: Yup.string()
        .min(2, "Must be longer than 2 characters")
});

const MyPosts = (props) => {

    let postsElements = props.posts.map((element, i) => <Post message={element.message} key={element.id}
                                                              likesCount={element.likesCount}/>)

    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm addPost={props.addPost}/>
            <div className={cl.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {

    let onAddPost = (values) => {
        props.addPost(values);
    }

    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values, {resetForm}) => {
                onAddPost( values.newPostText );
                resetForm( {values: ''} );
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newPostText'}
                            as={'textarea'}
                            placeholder={'Enter your post text'}
                        />
                    </div>
                    <ErrorMessage name="newPostText" component="div"/>

                    <button type={'submit'}>Add post</button>
                </Form>
            )}
        </Formik>
    )
}

export default MyPosts;