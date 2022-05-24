import React from 'react';
import cl from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                img
            </div>
            <div className={cl.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;