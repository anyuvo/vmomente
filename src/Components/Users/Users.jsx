import React from 'react';
import cl from "./users.module.css";
import userPhoto from "../../img/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small || userPhoto} className={cl.userPhoto} alt='userPhoto'/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;