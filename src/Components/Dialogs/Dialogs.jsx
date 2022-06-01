import React from 'react';
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
    return (
        <div className={cl.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let DialogsElements = props.messagesPage.dialogsData.map( (element, i) => <DialogItem key={element.id} name={element.name} id={element.id}/> )

    let MessagesElements = props.messagesPage.messagesData.map( (element, i) => <Message key={element.id} message={element.message} id={element.id}/> )

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                { DialogsElements }
            </div>
            <div className={cl.messages}>
                { MessagesElements }
            </div>
        </div>
    );
};

export default Dialogs;