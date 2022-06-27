import React from 'react';
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let addNewMessage = (values) => {
        props.sendMessage(newMessageBody);
    }

    let DialogsElements = state.dialogsData.map((element, i) => <DialogItem key={element.id}
                                                                            name={element.name}
                                                                            id={element.id}/>)

    let MessagesElements = state.messagesData.map((element, i) => <Message key={element.id}
                                                                           message={element.message}
                                                                           id={element.id}/>)

    let newMessageBody = state.newMessageText;

    if (!props.isAuth) return <Navigate to={"/login"}/>;

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={cl.messages}>
                <div className={cl.messagesBlock}>
                    <h3>My messages</h3>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={newMessageBody} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "DialogAddMessageForm"})(AddMessageForm);

export default Dialogs;