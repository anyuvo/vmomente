import {profileAPI} from "../api/profileAPI";
import {PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "I am fine", likesCount: 12}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string

}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        newPostText
    }
}
type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => {
    return {
        type: DELETE_POST,
        postId
    }
}
type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string

}
export const setStatus = (status: string): SetStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}


export default profileReducer;