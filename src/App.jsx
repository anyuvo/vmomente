import React from "react";
import cl from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPost} from "./Redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={cl.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={cl.appWrapperContent}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path='/dialogs/*'
                               element={<Dialogs messagesPage={props.state.messagesPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;