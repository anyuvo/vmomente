import React from "react";
import cl from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={cl.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={cl.appWrapperContent}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}
                               />}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs messagesPage={props.state.messagesPage}
                                                 addMessage={props.addMessage}
                                                 updateNewMessageText={props.updateNewMessageText}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;