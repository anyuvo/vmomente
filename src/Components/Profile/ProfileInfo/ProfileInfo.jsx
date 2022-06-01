import React from 'react';
import cl from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://mobimg.b-cdn.net/v3/fetch/42/422f8b74c7439b23f1286bb4e61e0402.jpeg"
                     alt="my image"
                     className={cl.mainImage}
                />
            </div>
            <div className={cl.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;