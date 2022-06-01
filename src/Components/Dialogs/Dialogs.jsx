import React from 'react';
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newMessageElement = React.createRef();

let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
}

const Dialogs = (props) => {

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
                            <textarea ref={newMessageElement}></textarea>
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