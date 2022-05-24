import React from 'react';
import cl from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={cl.item}>
                <a href='#'>News</a>
            </div>
            <div className={cl.item}>
                <a href='#'>Music</a>
            </div>
            <div className={cl.item}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;