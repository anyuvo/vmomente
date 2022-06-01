import React from 'react';
import cl from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={cl.dialog}>
            <NavLink
                to={'/dialogs/' + props.id}
                className={l => l.isActive ? cl.activeLink : cl.dialog}>{props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;