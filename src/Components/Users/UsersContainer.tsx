import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    requestUsers
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    isFetching: boolean,
}

type MapDispatchPropsType = {
    unfollow: (userId: number) => void,
    follow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChanged}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           followingInProgress={this.props.followingInProgress}/>}
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose<React.Component>(
    //TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsers: requestUsers
    })
)
(UsersContainer);