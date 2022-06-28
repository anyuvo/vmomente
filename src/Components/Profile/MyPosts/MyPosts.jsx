import React from 'react';
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
// import {reduxForm, Field} from 'redux-form';
// import {maxLengthCreator, required} from "../../../utils/validators/validators";
// import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    let postsElements = props.posts.map((element, i) => <Post message={element.message} key={element.id}
                                                              likesCount={element.likesCount}/>)

    // let newPostElement = React.createRef();

    // let onAddPost = (values) => {
    //     props.addPost(values.newPostText);
    // }

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

                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}


// let maxLength10 = maxLengthCreator(10);
//
// const AddNewPostForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} />
//             </div>
//             <div>
//                 <button>Add post</button>
//             </div>
//         </form>
//     )
// }
//
// const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;