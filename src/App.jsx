import React from "react";
import cl from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={cl.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={cl.appWrapperContent}>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile store={props.store}/>}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;