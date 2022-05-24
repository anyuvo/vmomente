import React from 'react';
import cl from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={cl.content}>
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
                <div className={cl.item}>post 1</div>
                <div className={cl.item}>post 2</div>
            </div>
        </div>
    );
};

export default Profile;