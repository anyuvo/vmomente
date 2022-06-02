import React from 'react';
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD_MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }

    let DialogsElements = props.messagesPage.dialogsData.map((element, i) => <DialogItem key={element.id}
                                                                                         name={element.name}
                                                                                         id={element.id}/>)

    let MessagesElements = props.messagesPage.messagesData.map((element, i) => <Message key={element.id}
                                                                                        message={element.message}
                                                                                        id={element.id}/>)

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
                            <textarea onChange={onMessageChange} ref={newMessageElement}
                                      value={props.messagesPage.newMessageText}></textarea>
                        </div>
                        <div>
                            <button onClick={addMessage}>Add message</button>
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