import React from "react";
import cl from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
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
        );
    }
}

export default compose (
    withRouter,
    connect(null, {getAuthUserData}
))(App);