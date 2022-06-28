import React from 'react';
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom';
import {Formik, Form, Field} from "formik";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogsElements = state.dialogsData.map((element, i) => <DialogItem key={element.id}
                                                                            name={element.name}
                                                                            id={element.id}/>)

    let MessagesElements = state.messagesData.map((element, i) => <Message key={element.id}
                                                                           message={element.message}
                                                                           id={element.id}/>)

    if (!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={cl.messages}>
                <div className={cl.messagesBlock}>
                    <h3>My messages</h3>
                    <AddMassageForm sendMessage={props.sendMessage} />
                    <div className={cl.message}>
                        {props.message}
                    </div>
                </div>
                <div className={cl.message}>
                    {MessagesElements}
                </div>
            </div>
        </div>
    );
};

const AddMassageForm = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage( values );
    }

    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            onSubmit={(values, {resetForm}) => {
                addNewMessage( values.newMessageBody );
                resetForm( {values: ''} );
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageBody'}
                            as={'textarea'}
                            placeholder={'Enter your message'}
                        />
                    </div>

                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;