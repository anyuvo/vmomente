import React from 'react';
import cl from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/*<img src="https://mobimg.b-cdn.net/v3/fetch/42/422f8b74c7439b23f1286bb4e61e0402.jpeg"*/}
                {/*     alt="my image"*/}
                {/*     className={cl.mainImage}*/}
                {/*/>*/}
            </div>
            <div className={cl.descriptionBlock}>
                <img src={props.profile.photos.large} alt="ava"/>
                <ProfileStatus status={"HELLO"}/>
                <div><b>Полное имя:</b> {props.profile.fullName}</div>
                <div><b>Обо мне:</b> {props.profile.aboutMe}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;