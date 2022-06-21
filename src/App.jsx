import React from "react";
import cl from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className={cl.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={cl.appWrapperContent}>
                    <Routes>
                        <Route path="/profile/:userId"
                               element={<ProfileContainer/>}/>
                        <Route path="/profile/*"
                               element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*'
                               element={<DialogsContainer/>}/>
                        <Route path='/users/*'
                               element={<UsersContainer/>}/>
                        <Route path='/login'
                               element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;