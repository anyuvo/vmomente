import React from 'react';
import cl from "./Header.module.css";
import logo from '../../img/vm.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cl.Header}>
            <a href='/profile'>
                <img className={cl.logo} src={logo} alt='logo'/>
            </a>
            <div className={cl.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;