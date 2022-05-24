import React from "react";
import cl from "./App.module.css";

function App() {
    return (
        <div className={cl.App}>
            <header className={cl.Header}>
                <a className={cl.logo}>
                    <img src='./img/vm.png' alt='logo'/>
                </a>
            </header>
            <nav className={cl.Nav}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={cl.Content}>
                <div>
                    img
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>post 1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
