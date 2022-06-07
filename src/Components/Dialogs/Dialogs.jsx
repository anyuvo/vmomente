import React from 'react';
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let DialogsElements = state.dialogsData.map((element, i) => <DialogItem key={element.id}
                                                                                         name={element.name}
                                                                                         id={element.id}/>)

    let MessagesElements = state.messagesData.map((element, i) => <Message key={element.id}
                                                                                        message={element.message}
                                                                                        id={element.id}/>)

   let newMessageBody = state.newMessageText;

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={cl.messages}>
                <div className={cl.messagesBlock}>
                    <h3>My messages</h3>
                    <div>
                        <div>
                            <textarea onChange={onNewMessageChange}
                                      value={newMessageBody}
                                      placeholder='Enter your message'></textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick}>Add message</button>
                        </div>
                    </div>
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

export default Dialogs;