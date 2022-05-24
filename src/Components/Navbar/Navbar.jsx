import React from 'react';
import cl from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <a href='#'>Profile</a>
            </div>
            <div className={cl.item}>
                <a href='#'>Messages</a>
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