import React from "react";
import cl from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}
))(App);