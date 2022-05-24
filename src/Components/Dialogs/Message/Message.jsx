import React from 'react';
import cl from "./Dialogs.module.css";
import Navbar from "../Navbar/Navbar";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
    return (
        <div className={cl.message}>{props.message}</div>
    )
};

let DialogsData = [
    { name: "Andrey", id: 1 },
    { name: "Oleg", id: 2 },
    { name: "Irina", id: 3 }
]

let MessagesData =[
    { message: "hi", id: 1 },
    { message: "how are you", id: 2 },
    { message: "ok ok", id: 3 }

]

let DialogsElements = DialogsData.map( (element, i) => <DialogItem key={element.id} name={element.name} id={element.id}/> )

let MessagesElements = MessagesData.map( (element, i) => <Message key={element.id} message={element.message} id={element.id}/> )


const Dialogs = (props) => {
    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {/*<DialogItem name="Andrey" id="1"/>*/}
                {/*<DialogItem name="Oleg" id="2"/>*/}
                {/*<DialogItem name="Irina" id="3"/>*/}
                { DialogsElements }

            </div>
            <div className={cl.messages}>
                {/*<Message message="Hi"/>*/}
                {/*<Message message="How are you?"/>*/}
                {/*<Message message="ok ok"/>*/}
                { MessagesElements }
            </div>
        </div>
    );
};

export default Dialogs;