import React from 'react';
import cl from "./Header.module.css";
import logo from '../../img/vm.png';

const Header = () => {
    return (
        <header className={cl.Header}>
            <a href='src/Components/Header/Header#'>
                <img className={cl.logo} src={logo} alt='logo'/>

            </a>
        </header>
    );
};

export default Header;